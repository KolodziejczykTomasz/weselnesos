<script setup lang="ts">
import SlotCardList from '@/components/Slot-cardList.vue';
import firstDanceMusic from '@/data/firstDance.js';
const items: Object | any = firstDanceMusic
</script>
<template >
    <div class="container">
        <div class="header">
            <div class="title"><p>Pierwszy taniec Pary Młodej</p></div>
            <div class="slug">
                <p>Pierwszy taniec Pary Młodej jest dla gości przepiękną i wzruszającą atrakcją, natomiast dla Nowożeńców to sprawdzian wielogodzinnych prób na parkiecie pod okiem choreografa.</p>
            </div>
        </div>
        <div class="postPhoto" >
            <img src="../assets/images/dance.jpg" alt="zdjęcie pierwszego tańca pary młodej" />
        </div>
        <div class="content">          

            <p>Jaką muzykę wybrać? - to zależy od umiejętności tanecznych. Pamiętajmy aby nie podnieść za wysoko sobie poprzeczki, bo to w połączeniu ze stresem na sali weselnej może przynieść odwrotny skutek. </p>
            
            <p>Jak w życiu tak i na pakiecie najważniejszy jest ten pierwszy raz. Nawet jak nie uda się rozpocząć zgodnie, z tym co było na próbach nie rozpoczynamy tańca od nowa, bo goście i tak nie zauważą nie planowanych kroków. </p>
             
            <p>A co zrobić aby wyglądało tak jak teledyskach?? Tutaj z pomocą przychodzą Szkoły Taneczne stacjonarne a nawet kursy online. Wybór zależy od Was i od dostępności wolnego czasu na próby. </p> 
            
            <p>Przygotowaliśmy małe ułatwienie i sporządziliśmy listę najczęściej wybieranych utworów przez Pary Młode. Umieściliśmy również odnośnik, aby można było odsłuchać wybraną piosenkę.  </p>           
    
        </div>
        <div class="footer">
            <div class="categoryName"></div>
        </div>
        <div class="wrapperArray">
            <p class="title">Muzyka najczęściej podczas pierwszego tańca Pary Młodej</p>
            <SlotCardList v-for="item in items" :key="item.id">
                <div class="array">
                    <div class="itemId">{{item.id}}</div>
                    <div class="itemBand">{{item.band}}</div>
                    <div class="itemTitle">{{item.title}}</div>
                    <div class="itemUrl" v-show="item.url">                    
                        <a :href="item.url" target="_blank"><i class="bi bi-volume-up-fill"></i></a>
                    </div>
                </div>                    
            </SlotCardList>

            <p class="alert">Zamieszczone linki do stron z utworami mają charakter wyłącznie poglądowy. Należy pamiętać, że wszelkie prawa do utworów należą do autorów tekstu.</p>
        </div>
    </div>
</template>
<style scoped>

.alert {
    padding: 50px 0;
    font-size: 18px;
}
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