<script setup lang="ts">
import LayoutDefault from '@/layouts/layout-default.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import {ref} from 'vue';

const showBanner = ref(true);



</script>
<template>
  <div class="wrapper">
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
    </metainfo>
    
    <div class="banner">
        <CookieBanner v-show="showBanner" @hideBanner="showBanner = false"/>      
    </div>
    <LayoutDefault/>    
  </div>   
</template>
<style scoped>
.wrapper{
  position: relative;
}
.banner{
  position: absolute;
  bottom: 4%;
  right: 0;
  width: 100%;
}
</style>


