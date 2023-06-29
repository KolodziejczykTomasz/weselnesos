<template>
    <div class="church-section">
        <router-link to="/church/gospels"><div class="church-item">Ewangelia</div></router-link>
        <router-link to="/church/firstReading"><div class="church-item">I Czytanie</div></router-link>
        <router-link to="/church/secondReading"><div class="church-item">II Czytanie</div></router-link>
        <router-link to="/church/psalms"><div class="church-item">Psalm</div></router-link>
        <router-link to="/church/music"><div class="church-item">Muzyka</div></router-link>
        <router-link to="/church/confession"><div class="church-item">Spowiedź</div></router-link>
    </div>
</template>
<style scoped>
.church-section {
    display:flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    padding: 100px;
}
.church-section a {
    text-decoration: none;
    color: #553898;
}

.church-item {
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

.church-item:hover {
    box-shadow: 0 0 4px #553898;
    color:#2e170f;
}


</style>