<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black">
      <!--      <div>
              <q-btn round :loading = "flag"  @click="changeflag" color="black" icon="camera_rear">
                <template v-slot:loading>
                  <q-spinner-gears />
                </template>
              </q-btn>
            </div>-->

      <q-toolbar class="row justify-between">
        <div class="flex">
          <q-toolbar-title>资源小屋</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </div>
        <div class="flex">
          <q-btn flat round dense class="q-mr-xs"
            ><q-avatar><q-img src="/icons/search1.png" /></q-avatar
          ></q-btn>
          <q-btn flat round dense class="q-mr-xs" @click="logout"
            ><q-avatar><q-img src="/icons/logout.png" /></q-avatar
          ></q-btn>
        </div>

        <div class="q-pa-md q-gutter-md">
          <q-btn-toggle
            v-model="model"
            push
            glossy
            toggle-color="primary"
            :options="[
              { value: 'day', icon: 'light_mode' },
              { value: 'night', icon: 'dark_mode' },
            ]"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <router-link to="/mainlayout">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-img src="/icons/img.png" />
              </q-item-section>

              <q-item-section> 首页 </q-item-section>
            </q-item>
          </router-link>

          <q-separator />

          <router-link to="indexpage">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section> 跳转到indexpage </q-item-section>
            </q-item>
          </router-link>

          <q-separator />

          <router-link to="targetpage">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section> 动漫 </q-item-section>
            </q-item>
          </router-link>

          <q-separator />

          <router-link to="userauthpage">
            <q-item clickable v-ripple>
              <q-item-section class="bg-amber" avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section class="text-red-10 bg-yellow">
                用户管理模块
              </q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth";
import axios from "axios";

const $q = useQuasar();
const drawer = ref(false);
const miniState = ref(true);
const $router = useRouter();
const authStore = useAuthStore();

const menuList = [
  {
    icon: "inbox",
    label: "Inbox",
    separator: true,
  },
  {
    icon: "send",
    label: "Outbox",
    separator: false,
  },
  {
    icon: "delete",
    label: "Trash",
    separator: false,
  },
  {
    icon: "error",
    label: "Spam",
    separator: true,
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false,
  },
];

/*const flag=ref(false);

    const changeflag=()=>{
      flag.value = true
      setTimeout(()=>{flag.value=false;gotoIndexPage()},3000)
  }

    const gotoIndexPage = () => {
      $router.push('indexpage');
    }*/
/*---------------------*/
/*日间夜间模式监控*/
const model = ref("day");
watch(model, (newValue, oldValue) => {
  if (newValue === "day") {
    $q.dark.set(false);
  } else {
    $q.dark.set(true);
  }
});
/*---------------------*/
/*退出登录*/
const logout = () => {
  const response = axios.get("/api/logout");
  authStore.logout();
  $q.notify({
    message: "退出登录成功",
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
  });
  $router.push("/");
};
/*---------------------*/
</script>

<style>
/* 可以添加样式来美化布局和按钮样式 */
</style>
