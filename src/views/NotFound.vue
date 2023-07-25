<template>
<div class="container">
    <h1>Upps!</h1>
    <h3>Strony, której szukasz nie znaleziono</h3>
    <router-link :to="{name: 'HomeView'}">Powrót do strony głównej</router-link>
</div>
</template>
<style scoped>
.container{
    display:flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;
    height: 60vh;
}

.container a {
    text-decoration: none;
    color: #b09aee;
}
</style>