<script setup lang = "ts">
import secondReading from "@/data/secondReading.js";
const items: object | any = secondReading
</script>

<template>
    <div class="church-section">
        <div class="church-item" v-for="item in items" :key="item.id"> {{ item.slug }}<p style="white-space: pre-line;">{{ (item.content) }}</p></div>    
    </div>
</template>

<style scoped>
.church-section {
    display:flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    padding: 100px;
}


.church-item {
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
    padding: 5px 5px;
}

.church-item:hover {
    box-shadow: 0 0 4px #553898;
    color:#2e170f;
}
</style>