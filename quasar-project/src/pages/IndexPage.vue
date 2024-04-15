<template>
  <q-page class="flex flex-center">
    <img
      alt="EMT"
      src="/icons/wallhaven-73r66e.png"
      style="max-width: 100%; max-height: 100%"
    />

    <q-img
      style="max-width: 100%; max-height: 100%"
      src="/icons/aa6db5eb6683c407721d725ee87ad118.jpg"
    ></q-img>

    <p v-for="n in 15" :key="n">随机字</p>

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="/icons/aa6db5eb6683c407721d725ee87ad118.jpg"
          :height="150"
        />

        <q-card-section>
          这是一张小卡片:
          <p>规则1:当你看到这张卡片不要惊讶,立马让他消失</p>
          <q-separator></q-separator>
          <p>规则2:如果无法让他消失,请尝试找到第二张小卡片,记住,这不是第一张</p>

          <q-card-actions align="around">
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>

    <q-card
      class="my-card"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

        这是一张小卡片:
        <p>规则1:当你看到这张卡片不要惊讶,立马让他消失</p>
        <q-separator></q-separator>
        <p>规则2:如果无法让他消失,请尝试找到第二张小卡片,记住,这不是第一张</p>

        <q-card-actions align="around">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
