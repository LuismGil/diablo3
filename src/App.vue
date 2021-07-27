<template>
  <div id="app">

    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <MainLayout v-else/>

  </div>
</template>

<script>
import { mapState } from 'vuex';

import BaseLoading from '@/components/BaseLoading.vue';
import LoadLayout from './layouts/LoadLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading,
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading',
    }),
  },
};
</script>

<style>
  #app {
    padding: 60px 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
    background-color: #15202b;
    }
</style>
