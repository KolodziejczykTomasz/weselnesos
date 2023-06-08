<script setup lang="ts">

</script>
<template>
  <div class="aside-wrapper">
    <div class="aside-brand">
      <img src='../assets/images/page-element/brand.png' alt="brand logo"/>
    </div>
    <div class="aside-header">
      <p class="aside-header-title">weselne.sos.pl</p>
      <p class="aside-header-icons">
        <span class="aside-icon"><a target="_blank" href="https://www.facebook.com/sosweselne"><i class="bi bi-facebook"></i></a></span>
        <span class="aside-icon "><a target="_blank" href="mailto:'redakcja.weselne.sos@gmail.com'"><i class="bi bi-envelope"></i></a></span>
      </p>

    </div>
    
    <div class="aside-navigation">
      <nav>
        <ul>       
          <li><router-link to="/">Przygotowania </router-link></li>
          <li><router-link to="/psalmy" >Psalmy</router-link></li>  
        </ul>     
      </nav>
    </div>
    <div class="aside-footer">
      <p>Copyright &copy; weselne.sos.pl</p>
    </div>
  </div>

</template>
<style scoped>
.aside-wrapper {
  display: grid;
  grid-template-rows: 200px 1fr 2fr 200px;
  height: 100%;
  width: 100%;
  border-right: 1px solid #553898;
}

.aside-header {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  font-size: 20px;
}

.aside-header-title {
  color:#2e170f;
  font-size: 22px;
  margin-top: 80px;
  margin-bottom: 40px;
}

.aside-header-icons {
  margin-top:-40px;
}

.aside-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}

.aside-icon a {
  margin: 0 5px;
  color: #2e170f;
}

.aside-icon a:hover {
  color:#553898;
}
.bi-facebook {
  font-size: 19px;
}
.aside-navigation {
  display: flex;
  justify-content: center;
  align-content: flex-start;
}


nav { 
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: left;
  margin-top: 100px;
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
.aside-footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 16px;
  color: #8a8a8a;
}

@media only screen and (max-width: 600px) {
  .aside-footer {
    display: none;
  }
  nav { 
  width: 100%;
  min-height: 200px;
  height: auto;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.aside-wrapper {
  display: grid;
  grid-template-rows: 200px 200px 200px;

}
}
</style>