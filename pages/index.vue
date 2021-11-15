<template>
  <test />
  <div>Zyad</div>
</template>

<script lang="ts">
import Test from '~~/components/test/test.vue';

export default defineComponent({
  name: 'Page',
  components: {
    Test
  },
  mounted() {
    console.log(this.$store.dispatch('AuthModule/createAccount'))
  }
});
</script>
