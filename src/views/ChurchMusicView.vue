<script setup lang="ts">
    import SlotCardList from '@/components/Slot-cardList.vue';
    import churchMusic from '@/data/churchMusic.js';
    const items: Object | any = churchMusic;
</script>
<template>
<div class="container">
    <div class="header">
        <div class="title"><p>Oprawa muzyczna w kościele</p></div>
        <div class="slug">
            <p>Oprawa muzyczna podczas uroczystości zaślubin Młodej Pary jest kolejnym ważnym wyborem. Oczywiście można pozostawić to w rękach organisty danego kościoła ale, z tym to różnie bywa. Jednak większość Par Młodych decyduje się na opłacenie własnego organisty a nawet zespołu, który będzie, nie tylko atrakcją ale również wzruszy nas poprzez podkreślenie, tej ważnej chwili w życiu tych dwóch osób. </p>  
        </div>
    </div>
    <div class="postPhoto" >
        <img src="../assets/images/church.jpg" alt="zdjęcie pierwszego tańca pary młodej" />
    </div>
    <div class="content"> </div>
    <div class="footer">
        <div class="categoryName">
            <p>Wybór oczywiście jest duży i tu z pomocą przychodzi serwis Youtube, na którym można zobaczyć ale, przede wszystkim posłuchać wykonania danego utworu.</p>
            <p>Oczywiście my dla Was przygotowaliśmy zestawienie utworów  najczęściej wybieranych przez Nowożeńców.</p>
        </div>
    </div>
    <div class="wrapperArray">
        <p class="title">Utwory najczęściej wybierane podczas ceremoni w kościele</p>
        <SlotCardList v-for="item in items" :key="item.id">
            <div class="array">
                <div class="itemId">{{item.id}}</div>
                <div class="itemBand">{{item.band}}</div>
                <div class="itemTitle">{{item.title}}</div>
                <div class="itemUrl" v-show="item.url">                    
                    <a :href="item.url" target="_blank">
                        <i class="bi bi-volume-up-fill"></i>
                    </a>
                </div>
            </div>                    
        </SlotCardList>
        <p class="alert">Zamieszczone linki do stron z utworami mają charakter wyłącznie poglądowy. Należy pamiętać, że wszelkie prawa do utworów należą do autorów tekstu.</p>
    </div>
</div>
</template>
<style scoped>


.container {
    padding: 30px 0 70px 0;
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

.wrapperArray {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.array {
        display: flex;
        flex-direction: row; 
        justify-content: center;      
        align-items: center;
        border-bottom: 1px solid #553898;
        min-height: 50px;
        height: auto; 
        width: 70%; 
    }
.array:last-child {border-bottom: none}
.itemId, .itemUrl {
    width: 70px;
}
.itemTitle {
    width: 50%;
}
.itemBand {
    width: 50%;
}

.bi{
    color: #553898;
    font-size: 22px;
}
@media only screen and (max-width: 600px) {
    .container {
        padding: 30px 10px;
    }
    .array{
        width: 95%; 
    } 
}
</style>