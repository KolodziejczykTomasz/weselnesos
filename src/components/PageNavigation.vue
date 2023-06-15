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
  align-items: flex-end;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

nav ul {  
  list-style: none;
  text-decoration: none;
}

nav ul li {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid #553898;
  border-radius: 20px;
  width: 200px;
  
}

nav ul li a{
  list-style: none;
  text-decoration: none;
  color:#553898;
  transition: .2s; 
}


nav ul li a:hover{  
  list-style: none;
  text-decoration: none;
  color: #b09aee;
}

nav ul li:hover {
  border: 2px solid #b09aee;
} 

@media only screen and (max-width: 600px) {
  nav ul {
    margin-top: 20px;
  }

}

</style>