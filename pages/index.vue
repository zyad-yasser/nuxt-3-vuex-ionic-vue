<template>
  <div>
    <test @click="openPopover" />
    <div>Zyad</div>
    <ion-toggle id="themeToggle" @ionChange="toggleDarkness" :checked="dark" />
  </div>
</template>

<script lang="ts">
import Test from '~~/components/test/test.vue';
import Test1 from '~~/components/test/test1.vue';
import { toast } from '~~/native';
import { popovers } from '~~/native/popovers';

export default defineComponent({
  name: 'Page',
  components: {
    Test,
  },
  computed: {
    dark() {
      return this.$store.getters['MainModule/dark'];
    },
  },
  methods: {
    openPopover(event: any) {
      const popoverInstance = popovers.open(event, Test1, {});
    },
    toggleDarkness() {
      return this.$store.dispatch('MainModule/toggleDarkness');
    },
    toggleDarknessAction(event: any) {
      const checked = event.details.checked;
      if ((checked && !this.dark) || (!checked && this.dark)) {
        this.toggleDarkness();
      }
    },
  },
  mounted() {
    console.log(this.$store.dispatch('AuthModule/createAccount'));
    toast.show('This is new toast', 'non-native', 'success');
  },
});
</script>
