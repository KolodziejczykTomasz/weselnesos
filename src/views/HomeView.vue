<script setup lang="ts">
import NewsList from '../components/NewsList.vue'

</script>

<template> 
  <div class="wrapper">

    <main>
      <NewsList /> 
      <NewsList /> 
      <NewsList /> 
    </main>
  </div> 
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


main {
  display: flex;
  border: 1px solid orange;
  width: 80%;
  height: 100%;

}


</style>