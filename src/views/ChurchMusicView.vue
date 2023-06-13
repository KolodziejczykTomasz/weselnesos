
<template>
    <div class="church-section">
        <div class="church-item">
            <h2>Muzyka</h2>
            <div>

<ul>
    <li>Franz Schubert - Ave Maria</li>
    <li>Wolfgang Amadeus Mozart	- Laudate Dominum</li>
    <li>Barka</li>
    <li>Jan Sebastian Bach - Aria na strunie G</li>
    <li>Wolfgang Amadeus Mozart	- Ave Verum Corpus</li>
    <li>Panis Angelicus</li>
    <li>Drugi list do Świętego Pawła</li>
    <li>Psalm 116</li>
    <li>Pslam 117</li>
    <li>Veni Creator Spiritus</li>
    <li>Hymn o miłości</li>
    <li>Richard Wagner - Marsz Weselny</li>
</ul>
<div>Zamieszczone linki do stron z utworami mają charakter wyłącznie poglądowy.
Należy pamiętać, że wszelkie prawa do utworów należą do autorów tekstu.</div>
            </div>
        </div>
       
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
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin:10px;
    transition: .2s;
    color: #8a8a8a;
}



.church-item p {
    width: 100%;
}
</style>