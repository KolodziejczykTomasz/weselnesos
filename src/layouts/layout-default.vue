<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
</script>
<template>
    <div class="wrapper">     
        <PageHeader/>   
        <router-view/>       
        <PageFooter/>
    </div> 
</template>