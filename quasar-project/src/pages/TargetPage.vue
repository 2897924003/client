<template>
  <q-page class="row">
    <q-page class="col-md-1 col-xs-0"> kkk </q-page>
    kkk

    <q-page class="col-9 row q-pa-md">
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
      <q-img
        class="col-md-2 col-xs-5"
        loading="lazy"
        src="/icons/Snipaste_2024-04-08_15-44-10.png"
      />
    </q-page>
    kkk

    <q-page class="col-md-2 col-xs-3"> kkk </q-page>

    kkk

    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-fab
        icon="keyboard_arrow_up"
        direction="up"
        color="green"
        v-touch-pan.prevent.mouse="moveFab"
      >
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const fabPos = ref([18, 18]);

const moveFab = (ev) => {
  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};
</script>
