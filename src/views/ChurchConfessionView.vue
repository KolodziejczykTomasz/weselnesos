<script setup lang="ts">

</script>
<template>
<div class="container">
    <div class="header">
        <div class="title"><p>Spowiedź narzeczonych.</p></div>
        <div class="slug">
            <p>Pierwsza powinna odbyć się po wizycie w biurze parafialnym, po spisaniu protokołu, w czasie trwania  zapowiedzi, czyli 3 miesiace przed ślubem.</p>
            <p>Druga spowiedź narzeczonych powinna być dzień przed ślubem, aby w stanie łaski uświęcającej przyjąć sakrament małżeństwa. Trzecia spowiedź  (generalna czyli z całego życia) , przed przyjęciem sakramentu małżeństwa jest jak najbardziej wskazana.</p>
        </div>
    </div>
    <div class="postPhoto" >
        <img src="../assets/images/church.jpg" alt="zdjęcie wnętrza kościoła" />
    </div>
    <div class="content">
        <p>Aby dobrze się przygotować do spowiedzi przypomnijmy sobie znane od pierwszej komunii warunki sakramentu pokuty:</p>
        <ol>
            <li>Rachunek sumienia</li>
            <li>Żal za grzechy</li>
            <li>Postanowienie poprawy</li>
            <li>Szczera spowiedź</li>
            <li>Zadośćuczynienie Bogu i bliźnim</li>
        </ol>


    </div>
    <div class="footer">
        <div class="categoryName"></div>
    </div>
</div>
</template>
<style scoped>
.container {
    padding: 30px 0 70px 0;
}

@media only screen and (max-width: 600px) {
    .container {
        padding: 30px 10px;
    }
}
.title {
    padding: 40px 0 20px 0; 
    font-weight: 600;
    font-size: 24px;
    color: #553898;
    font-style: italic;
}

.postPhoto img {
    display: block;
    margin: 60px auto;
    max-height: 300px;
    height: auto;
    width: auto;
    max-width: 90%;
    object-fit: cover;
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);
    filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.2));
}


</style>