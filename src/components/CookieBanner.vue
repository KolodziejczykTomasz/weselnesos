<script  lang="ts" setup>
   

</script>
<template>
    <div class="banner">
        <div class="content">
            Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw.
            pliki cookies. Korzystanie z serwisu oznacza zgodę na ich zapis lub
            wykorzystanie. Państwa dane osobowe wykorzystywane są tylko na potrzeby świadczonych poprzez media elektroniczne usług na Państwa rzecz. Więcej informacji można znaleźć w „Polityce prywatności”.
            Akceptuję
            <router-link to="/" class="">
              "Politykę prywatności"
            </router-link>
            i wykorzystania plików cookies w serwisie.        
        </div>
        <div class="buttons">
          <button type="button" class="buttonAccept" @click="$emit('hideBanner')">Anuluj</button>     
          <button type="button" class="buttonAccept" @click="$emit('hideBanner')">Akceptuję</button>           
        </div>
    </div>
</template>
<style scoped>

.banner {
  background-color:#553898;
  padding: 20px 30px;
  line-height: 18px;
  font-size: 16px;
  border-radius: 5px; 
  color: white;
}
.buttonAccept {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 5px;
  border: 2px solid #553898;
  border-radius: 5px;
  width: 150px;
  font-size: 18px;
  padding: 3px 0;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: end;
}
.buttonAccept{
  list-style: none;
  text-decoration: none;
  color:#553898;
  transition: .2s; 
  background-color: white;
  z-index: 9999;
}

.buttonAccept:hover{  
    list-style: none;
    text-decoration: none;
    color: #b09aee;  background-color: white;
  }
  

</style>