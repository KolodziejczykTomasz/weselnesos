<script setup lang="ts">
import PageNavigation from './PageNavigation.vue';


</script>
<template>
  <div class="wrapper">

   <div class="brand">
    <router-link to="/"> 
      <div >
        <img src='../assets/images/page-element/brand.png' alt="brand logo"/>
        
      </div>
    </router-link>
   </div>
    
    <div class="navigation">
      <PageNavigation/>
    </div>


    <div class="social">
      <p class="brand-title">weselne.sos.pl</p>     
      <p class="social-icons">
        <span class="icon"><a target="_blank" href="https://www.facebook.com/sosweselne"><i class="bi bi-facebook"></i></a></span>
        <span class="icon "><a target="_blank" href="mailto:'redakcja.weselne.sos@gmail.com'"><i class="bi bi-envelope"></i></a></span>
      </p>
    </div>       
    
    </div>

</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  min-height: 250px;
  height: auto;
  width: 100%;
  border-bottom: 1px solid #553898;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
}
.brand {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-title {
  color:#2e170f;
  font-size: 22px;
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon a {
  margin: 0 5px;
  color: #2e170f;
}

.icon a:hover {
  color:#553898;
}
.bi-facebook {
  font-size: 19px;
}



</style>