<template>
  <div class="home-view">

    <HomeTitle/>

    <MainForm/>

  </div>
</template>

<script>
import MainForm from './HomeForm.vue';
import HomeTitle from './HomeTitle.vue';

export default {
  name: 'HomeView',
  components: { HomeTitle, MainForm },
};
</script>
