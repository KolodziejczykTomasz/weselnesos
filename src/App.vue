<script setup lang="ts">
import LayoutDefault from '@/layouts/layout-default.vue';
</script>
<template>
<metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo> 
    <LayoutDefault/>   
</template>


