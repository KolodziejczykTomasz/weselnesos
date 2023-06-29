<template>
  <div class="section">
      <router-link to="/church"><div class="item">Uroczystość</div></router-link>
      <router-link to="/firstdance"><div class="item">Pierwszy taniec</div></router-link>
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