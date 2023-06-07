<template>
<nav>
  <ul>
    <li><router-link to="/" >Aktualności</router-link></li>
    <li><router-link  to="/">Przygotowania </router-link></li>
    <li><router-link to="/psalmy" >Psalmy</router-link></li>
    <li><router-link  to="/">Dodatki</router-link></li></ul>
</nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: left;
}

nav ul {
  padding-left: 20px;
  list-style: none;
}

</style>