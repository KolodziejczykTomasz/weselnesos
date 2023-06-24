<script setup lang="ts">
import PageNavigation from './PageNavigation.vue';


</script>
<template>
  <div class="wrapper">

   <div class="brand">
    <router-link to="/church"> 
      <div>
        <img src='../assets/images/page-element/brand.png' alt="brand logo" class="brandImage"/>
        
      </div>
    </router-link>
   </div>
    
    <div class="navigation">
      <PageNavigation/>
    </div>


    <div class="social">
      
      <div class="social-icons">
        <span class="icon"><a target="_blank" href="https://www.facebook.com/sosweselne"><i class="bi bi-facebook"></i></a></span>
        <span class="icon "><a target="_blank" href="mailto:'redakcja.weselne.sos@gmail.com'"><i class="bi bi-envelope"></i></a></span>
      </div>
      <div class="brand-title">weselne.sos.pl</div>     
    </div>       
    
    </div>

</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  min-height: 150px;
  height: auto;
  width: 100%;
  border-bottom: 1px solid #553898;

}
@media only screen and (max-width: 800px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
  .brand-title { 
    margin-bottom: 20px;
}
}
.brand {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-title {
  display: flex;
  align-items: center;
  color:#553898;
  font-size: 20px; 
  height: 20%;
}

.brandImage {
  display: block;
  height: 140px;
}
.social-icons {
  display: flex;
  align-items: flex-end;
  height: 80%;  
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon a {
  margin: 0 5px;
  color:#553898;
  transition: .2s; 
}

.icon a:hover {
  color:#b09aee;
}
.icon {
  font-size: 28px;
  margin-right: 15px;
}



</style>