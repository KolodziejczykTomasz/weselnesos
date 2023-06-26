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
                <div class="content"></div>
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
    font-size: 18px;
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
    height: 300px;  
    width: 100%;
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
</style>