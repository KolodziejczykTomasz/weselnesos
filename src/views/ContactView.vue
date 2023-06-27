<script setup lang="ts">
import {reactive} from 'vue'

type messageForm = {
    name: string;
    email: string;  
    message: string;
    accept: boolean
}


const form = reactive<messageForm>({
    name: '',    
    email: '',
    message: '',
    accept: true

});

const onSubmit = ()=> {
      console.log(form)
    }

</script>
<template>
    <div class="section">
       <div class="title">
            <h1 >Kontakt</h1>
       </div>
       <div class="container">
            <div class="leftAside">
                <p class="subtitle">Napisz do nas</p>
                <div class="content">
                    <p class="companyName">Redacja Portalu WESELNE.SOS.PL</p>
                    <ul>
                        <li>
                            <span class="icon ">
                                <a target="_blank" href="mailto:'redakcja.weselne.sos@gmail.com'">
                                    <i class="bi bi-envelope"></i>redakcja.weselne.sos@gmail.com
                                </a>
                            </span>
                        </li>
                        <li>
                            <span class="icon">
                                <a target="_blank" href="https://www.facebook.com/sosweselne">
                                    <i class="bi bi-facebook"></i>facebook.com/sosweselne
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rightAside">
                <div><p class="subtitle">Wyślij wiadomość</p></div>
                <div class="content">
                    <form @submit.prevent="onSubmit" class="formWrapper">
                        <label for="name">Imię</label>
                        <input name="name" type="text" id="name" v-model="form.name"/>
                        <label for="email">Email</label>
                        <input name="email" type="text" id="email" v-model="form.email"/>
                        <label for="message">Treść wiadomości</label>
                        <textarea for="message" v-model="form.message" id="message"></textarea>
                       <div class="accept">
                        <input type="checkbox" name="accept" v-model="form.accept"/><label for="accept">Akceptuję warunki <router-link to="/cookies" target="_blank">polityki prywatności</router-link></label> </div>
                        <input class="button" type="submit" value="Wyślij">  
                    </form>
                </div>
            </div> 
       </div>     
    </div>
</template>
<style scoped>
.section {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 400px;
    height: auto;
    color:#553898;
}

.leftAside, .rightAside {
    display: grid;
    grid-template-rows: 100px 1fr;
    height: 100%;
}

.title {
    text-align: center;
    padding: 50px 20px;    
}

.companyName {
    display: block;
    height: 70px;
    width: 100%;
    font-size: 22px;
    font-weight: 600;
}

.subtitle { 
    font-size: 24px; 
    height: 100px;
    text-align: left;
    
}

.leftAside, .rightAside  {
    padding-left: 20px;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;  
    height: 100%;
    width: 100%;
    align-items: flex-start;
}


.leftAside {
    display: grid;
    border-right: 1px solid #553898;
    width: 100%;
    min-height: 400px;
    height: auto;
}

.content {
    display: grid;
    min-height: 400px;
    height: auto;
    justify-content: flex-start;
}

.content ul {
    display: flex;  
    width: 100%;
    list-style: none;   
    flex-direction: column;
    margin-top: -150px;
}

.content ul li a {
    margin-left: -30px;
    text-decoration: none;
    color:#553898;
}

.bi {
    margin-right: 10px;
    margin-top: 20px;
}

.formWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px; 
    margin-bottom: 70px;
}

input, textarea {
    width: 300px;
}
.accept {
    display: flex;
}

input[type="checkbox"] {
    margin-top: 10px;
    margin-right: 7px;
    height: 18px;
    width: 18px;
}

input[type="submit"] {
    margin-top: 40px;
    color: white;
    background-color: #553898;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
}

label {
    display: block;
    float: left;
    width: 100%;
    margin-left: 200px;
}
label:last-child {    
    margin-left: 0;
    margin-top: 7px;
}

label a {
    color: #553898;
}

@media only screen and (max-width: 800px) {
    
    .section {    
        height: auto;
    }
    .container {   
        grid-template-columns: 1fr;
    }
    .subtitle {
        text-align: center;
    }
    .content ul {    
    margin-top: 0;
    }
    .leftAside, .rightAside {   
        min-height: 100px;
        height: auto;
        grid-template-rows: repeat(1, 1fr)
    }
    .leftAside {
        display: grid;
        border-right: 1px solid transparent;
    }
    .content {
        display: grid;
        min-height: 100px;
        height: auto;
        justify-content: center;
        align-items: center;
    }
    .subtitle:last-child {
        margin-top: 50px;
    }
}
</style>