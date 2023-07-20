<script setup lang="ts">
import { reactive } from 'vue';
import gospels from '@/data/gospels.js';

interface Props {
  id: Number
  slug: String
  content: String
  title: String
  
};


const props = defineProps<Props>()
const idProps = reactive(props.id); 
let items = gospels;
let data:any = items;
const filterItem = data.filter((item: String | any) => item.id == idProps)

</script>


<template>
    <div class="section">
        <div class="item"> 
            <div class="container"  >
                <div class="slug">{{ filterItem[0].slug }} </div>
                <div class="content">{{ filterItem[0].content }} </div>
                <div class="title">{{ filterItem[0].title }} </div>
                
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

.slug{
    padding: 20px 0; 
    font-weight: 700;
    font-size: 24px;
    color: #553898;
    font-style: italic;
}

.title {
    font-size: 18px; 
    padding: 5px 0;
    
}

.subtitle {
    font-size: 22px; 
    padding: 30px 0;

}

</style>