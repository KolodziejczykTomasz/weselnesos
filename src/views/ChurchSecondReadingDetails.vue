<script setup lang = "ts">

import secondReading from '@/data/secondReading.js'

import { computed, ref } from 'vue';

 defineProps({
  id: {
    required: true,
    type: Number
  },
   props: {
    type: Object,
    required: true,
  },
})
 


const items = ref(secondReading);



</script>


<template>
    <div class="section">
        <div class="item"> 
            <div class="container">
                {{ items }} {{ id }}   {{ filterItem }}    
                
            </div>            
        </div>    
    </div>
</template>

<style scoped>
.section {
    display:flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    padding: 100px;
}
@media only screen and (max-width: 1020px) {
    .section {
        padding: 20px;
    }
}

.item {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    width: 100%;
    min-height: 250px;
    height: auto;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 0 2px #b09aee;
    margin:10px;
    transition: .2s;
    color: #8a8a8a;
    text-align: left;
    margin: 20px 0;
    padding: 5px 0;
}

.item {
    width: 100%;
}

.container{
    padding: 0 20px;
}

.title {
    font-size: 24px; 
    padding: 20px 5px;
    font-weight: 600;
}

.subtitle {
    font-size: 22px; 
    padding-bottom: 30px;
}

.content {
   margin-bottom: 30px;
}
</style>