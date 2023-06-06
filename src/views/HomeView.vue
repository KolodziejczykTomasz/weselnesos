<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
import PageNavigation from '../components/PageNavigation.vue'
</script>

<template> 
  <div class="wrapper">
    <aside>
      <PageNavigation/>
    </aside>
    <main>
      <NewsList />
      <router-view />
    </main>
  </div> 
  <router-view />
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;    
  border: 3px solid green;
}

aside{
  display: flex;
  height: 100%;
  border: 1px solid red;
  width: 20%;
}

main {
  display: flex;
  border: 1px solid orange;
  width: 80%;
  height: 100%;

}


</style>