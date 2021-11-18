<template>
  <ion-app>
    <div id="main">
      <NuxtPage />
    </div>
  </ion-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  computed: {
    dark() {
      return this.$store.getters['MainModule/dark'];
    },
  },
  watch: {
    dark(value: boolean) {
      document.body.classList.toggle('dark', value);
    },
  },
  methods: {
    toggleDarkness() {
      return this.$store.dispatch('MainModule/toggleDarkness');
    },
  },
  mounted() {},
});
</script>
