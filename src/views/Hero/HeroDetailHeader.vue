<template>
  <b-row class="hero-detail-header my-5">
    <b-col cols="12">

      <!-- Avatar -->
      <div class="d-flex justify-content-center mb-3">
        <div class="hero-detail-avatar" :class="heroClass"></div>
      </div>

      <div class="text-center">

        <!-- Name -->
        <h1 class="font-diablo text-truncate text-bone">{{ detail.name }}</h1>

        <div class="text-monospace">
          <small>
            <!-- Level -->
            <span>{{ detail.level }}</span>
            <!-- Paragon Level -->
            <span class="text-info" v-if="detail.paragonLevel">
              <span class="text-white"> · </span>
              ({{ detail.paragonLevel }})
            </span>
            <!-- Class (Mixin) -->
            <span> · {{classToName(detail.classSlug)}}</span>
            <!-- ¿is seasonal? -->
            <span v-if="detail.seasonal" class="text-success"> · Seasonal </span>
            <!-- ¿is hardcore? -->
            <span v-if="detail.hardcore" class="text-danger"> · Hardcore </span>
          </small>

          <div>
            <!-- Seadon created -->
            <small class="text-muted">
              Season created:
            </small>
            <b-badge>{{ detail.seasonCreated }}</b-badge>
          </div>
        </div>

        <hr>

      </div>
    </b-col>
  </b-row>
</template>

<script>
import heroName from '@/mixins/heroName';

export default {
  name: 'HeroDetailHeader',
  mixins: [heroName],
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    heroClass() {
      const gender = this.detail.gender === 0 ? 'male' : 'female';
      return `hero-${this.detail.classSlug} ${gender}`;
    },
  },
};
</script>

<style scoped>
.hero-detail-avatar {
  background-size: 280px;
  height: 105px;
  width: 138px;
}

.text-bone {
  color: #e8dcc2;
}
</style>
