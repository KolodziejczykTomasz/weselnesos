
<template>
    <div class="church-section">
        <div class="church-item">Muzyka</div>
        <div class="church-item">I Czytanie</div>
        <div class="church-item">II Czytanie</div>
        <div class="church-item">Psalm</div>
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


.church-item {
    display: flex;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 0 2px #b09aee;
    margin:10px;
    transition: .2s;
    color: #8a8a8a;
}

.church-item:hover {
    box-shadow: 0 0 4px #553898;
    color:#2e170f;
}
</style>