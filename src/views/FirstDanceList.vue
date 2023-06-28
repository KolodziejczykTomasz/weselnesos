<script setup lang="ts">
import SlotCardList from '@/components/Slot-cardList.vue';
import firstDanceMusic from '@/data/firstDance.js';
const items: Object | any = firstDanceMusic
</script>
<template >
    <div class="wrapper">
        <p class="title">Muzyka najczęściej podczas pierwszego tańca Pary Młodej</p>
        <SlotCardList v-for="item in items" :key="item.id">
            <div class="container">
                <div class="itemId">{{item.id}}</div>
                <div class="itemBand">{{item.band}}</div>
                <div class="itemTitle">{{item.title}}</div>
                <div class="itemUrl">                    
                    <a :href="item.url" target="_blank">play</a>
                </div>
                
            </div>
        </SlotCardList>
    </div>
</template>
<style scoped>
.title {
    width: 100%;
    text-align: center;
    margin: 50px 0;
    font-size: 26px;
    font-weight: 600;
}
.wrapper {
    margin: 70px 0;   
}
.container {
        display: flex;
        flex-direction: row; 
        justify-content: center;      
        align-items: center;
        border-bottom: 1px solid rebeccapurple;
        min-height: 50px;
        height: auto; 
        width: 70%; 
    }
    .container:last-child {border-bottom: none}
.itemId, .itemUrl {
    width: 70px;
}
.itemTitle {
    width: 50%;
}
.itemBand {
    width: 50%;
}

</style>