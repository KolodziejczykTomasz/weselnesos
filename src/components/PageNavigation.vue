<script setup lang="ts">

</script>
<template>
    
    <div class="navigation-wrapper">
      <nav>
        <ul>
          <li><router-link to="/church" >Kościół</router-link></li>  
        </ul>     
      </nav>
    </div> 
  

</template>
<style scoped>
.navigation-wrapper {
  width: 100%;
  height: 100%;
}


nav { 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

nav ul {
  padding-left: 20px;
  list-style: none;
  text-decoration: none;
}

nav ul li a{
  padding-left: 20px;
  list-style: none;
  text-decoration: none;
  color:#553898;
}


nav ul li a:hover{
  padding-left: 20px;
  list-style: none;
  text-decoration: none;
  color: #b09aee;
}


</style>