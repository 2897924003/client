<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "stores/auth";

const $q = useQuasar();
const username = ref(null);
const password = ref(null);
const $router = useRouter();
const authStore = useAuthStore();
const login = async () => {
  const response = await axios.post(
    "https://smooth-werewolf-rich.ngrok-free.app/api/client-login",
    { username: username.value, password: password.value },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  if (response.data.code === 1) {
    $q.notify({
      message: "欢迎!",
      position: "top",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
    authStore.login(username.value);
    await $router.push("/mainlayout");
  } else if (response.data.code === 1000) {
    $q.notify({
      message: response.data.message,
      position: "top",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  } else {
    $q.notify({
      message: "请仔细检查您的账号密码",
      position: "top",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  }
};

const register = async () => {
  const response = await axios.post(
    "https://smooth-werewolf-rich.ngrok-free.app/api/client-register",
    { username: username.value, password: password.value },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (response.data.code === 1) {
    $q.notify({
      message: "注册成功!",
      position: "top",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  } else {
    $q.notify({
      message: "账号已存在",
      position: "top",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  }
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page
        class="login-page-background flex flex-center"
        style="max-width: 100%; max-height: 100%"
      >
        <div class="q-pa-md" style="max-width: 400px">
          <q-form @submit="login" class="q-gutter-md">
            <q-input
              bg-color="white"
              rounded
              outlined
              v-model="username"
              label="账号"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || '不能为空']"
            />

            <q-input
              bg-color="white"
              rounded
              outlined
              v-model="password"
              label="密码"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || '不能为空',
                (val) => (val.length > 0 && val.length < 20) || '密码过长',
              ]"
            />

            <div class="row justify-around">
              <q-btn label="登录" type="login" color="blue" />
              <q-btn label="注册" @click="register" color="blue" />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.login-page-background {
  background-image: url("/icons/login2.png");
  background-size: cover;
  background-position: center;
  filter: brightness(100%);
}
</style>
