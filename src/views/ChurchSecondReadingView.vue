<script setup lang = "ts">
import secondReading from "@/data/secondReading.js";


defineProps({
  item: {
    type: Object,
    required: true,
  },
  items: {
    type: Object,    
  },
  id: {
    type: String,   
  },
  slug: {
    type: String,   
  },
});

const items = secondReading; 
</script>

<template>
    <div class="section">       
        <div class="item" v-for="item in items" :key="item.id" :item="item"> 
                <RouterLink            
                :to="{ name: 'secondReading-details', params: { id: item.id } }" >
                <div class="container">
                    <div class="title">
                        {{ item.slug }}
                    </div>               
                </div> 
            </RouterLink>              
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

.item-link {
  color: #b09aee;
  text-decoration: none;
}

@media only screen and (max-width: 1020px) {
    .section {
        padding: 20px;
    }
}

.section {
    display:flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    padding: 100px;
    text-align: center;
}
.section a {
    text-decoration: none;
    color: #553898;
}

.item {
    display: flex;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    box-shadow: 0 0 2px #b09aee;
    margin:10px;
    transition: .2s;  
}

.item:hover {
    box-shadow: 0 0 4px #553898;
    color:#2e170f;
}

</style>