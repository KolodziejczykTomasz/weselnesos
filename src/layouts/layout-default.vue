<script setup lang="ts">
import PageNavigation from '../components/PageNavigation.vue'
</script>
<template>
    <div class="wrapper">
      <div class="wrapper-naviagation">
        <PageNavigation/>
      </div>    
      <div class="wrapper-view">
        <router-view/>
      </div>     
      <div class="wrapper-footer"><p>Copyright &copy; weselne.sos.pl</p></div>  
    </div> 
</template>
<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: 300px 1fr;
  width: 100%;
  height: 100%;  
}
.wrapper-footer {
  display: none;
}
@media only screen and (max-width: 600px) {
  .wrapper {
    grid-template-columns: 1fr;
    height: auto;  
  }
  .wrapper-naviagation, .wrapper-view{
    height: 150px;
  }
  .wrapper-view{
    margin-top: 100px;
  }
  .wrapper-footer {

  height: 70px;
  background-color: #b09aee;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 16px;
  color: white;
}
.wrapper-view {
  margin-top: 300px;
}
}
</style>
