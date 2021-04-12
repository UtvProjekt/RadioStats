<template>

<div>
  <section class="pagelayout">
        <div class="header">
            <router-link to="/" class="logonotindexpage"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></router-link>
        
            <nav class="navbarforpc">
                <ul class="removelistdecoration">
                    <li class="navbartext"><router-link to="/trafikstatistik" class="navbarhover boldonwhatpage">Trafikstatistik</router-link></li>
                    <li class="navbartext"><router-link to="/trafikhandelser" class="navbarhover">Trafikstörningar</router-link></li>
                    <li class="navbartext"><router-link to="/program" class="navbarhover">Radioprogram</router-link></li>
                </ul>
            </nav>

            <router-link to="/omoss" class="omosspc navbarhover">
                Om Oss
            </router-link>
        </div>
  
        <span class="leftdescription leftspan2pc">
            <h1 class="titlepc">Trafikstatistik</h1>
            <p>Jämför trafikhändelser mellan städer.</p>
        </span>

        <div class="rightlayoutpc fornotindexpages">

            <div id="layoutinaccidents">
            
                <div class="buttoncontainer">
                    <div class="buttons">
                        <input type="checkbox" class="btn" id="stockholm" @click="changeWidth(this.$store.state.sthlmRoad, this.$store.state.sthlmKollektiv, this.$store.state.sthlmOvrigt, 'sthlmroad', 'sthlmkollektiv', 'sthlmovrigt')">
                        <input type="checkbox" class="btn" id="goteborg" @click="changeWidth(this.$store.state.goteborgRoad, this.$store.state.goteborgKollektiv, this.$store.state.goteborgOvrigt, 'goteborgroad', 'goteborgkollektiv', 'goteborgovrigt')">
                        <input type="checkbox" class="btn" id="malmo" @click="changeWidth(this.$store.state.malmoRoad, this.$store.state.malmoKollektiv, this.$store.state.malmoOvrigt, 'malmoroad', 'malmokollektiv', 'malmoovrigt')">
                    </div>
                    <div class="buttons">
                        <label for="stockholm" class="textforcheckbox">Stockholm</label>
                        <label for="goteborg" class="textforcheckbox">Göteborg</label>
                        <label for="malmo" class="textforcheckbox">Malmö</label>
                    </div>
                </div>
                    
                    <div class="barsoncrashes">
                        <h3 class="rotatenormal layunder">Vägtrafik</h3>
                        <div class="trafikstatistik">
                                <div id="sthlmroad" class="barsintrafik purple"></div> 
                                <div id="goteborgroad" class="barsintrafik orange"></div> 
                                <div id="malmoroad" class="barsintrafik green"></div>
                                
                        </div>
                        <h3 class="rotatenormal layunder">Kollektivtrafik</h3>
                        <div class="trafikstatistik">
                                <div id="sthlmkollektiv" class="barsintrafik purple"></div> 
                                <div id="goteborgkollektiv" class="barsintrafik orange"></div> 
                                <div id="malmokollektiv" class="barsintrafik green"></div> 
                            
                        </div>
                        <h3 class="rotatenormal layunder">Övrigt</h3>
                        <div class="trafikstatistik">
                                <div id="sthlmovrigt" class="barsintrafik purple"></div> 
                                <div id="goteborgovrigt" class="barsintrafik orange"></div>
                                <div id="malmoovrigt" class="barsintrafik green"></div>
                        </div>
                    </div>

                    <div class="measurebehindbars">
                        <div class="measureinbars bordertop">24</div>
                        <div class="measureinbars">20</div>
                        <div class="measureinbars">16</div>
                        <div class="measureinbars">12</div>
                        <div class="measureinbars">8</div>
                        <div class="measureinbars">4</div>
                    <div>0</div>
                </div>
            
            </div>
            </div>
        </section>
    </div>

</template>

<script>
    

export default {
    data() {
        return {
            outAndInGoteborg: false,
            outAndInMalmo: false,
            outAndInSthlm: false,
        }
    },
    methods: {
        //Checks which button is pressed and calls a method that changes the corresponding bars length
        changeWidth(type1, type2, type3, ide1, ide2, ide3){  
            if(ide1==='goteborgroad')
            {
                this.checkStatus(type1, type2, type3, ide1, ide2, ide3, this.outAndInGoteborg)
                this.outAndInGoteborg = !this.outAndInGoteborg
            }
            else if(ide1==='malmoroad')
            {
                this.checkStatus(type1, type2, type3, ide1, ide2, ide3, this.outAndInMalmo)
                this.outAndInMalmo = !this.outAndInMalmo
            }
            else if(ide1==='sthlmroad')
            {
                this.checkStatus(type1, type2, type3, ide1, ide2, ide3, this.outAndInSthlm)
                this.outAndInSthlm= !this.outAndInSthlm
            }
            
            
        },
        //Changes the width of the bars depending on the lenght of the list
        checkStatus(type1, type2, type3, ide1, ide2, ide3, outAndIn){
            let ide = [ide1, ide2, ide3]
            let type = [type1, type2, type3]
            let x = window.matchMedia("(min-width: 800px)")
            if(!outAndIn){
                if (x.matches) {
                    for(let i = 0; i<3; i++){
                        document.getElementById(ide[i]).style.width = 1.17+(1*(type[i]).length)+"vw"
                    }
                } 
                else {
                    for(let i = 0; i<3; i++){
                        document.getElementById(ide[i]).style.width = 9+(4*(type[i]).length)+"vw"
                    }
                  }

            } else {
                if(x.matches){
                    for(let i = 0; i<3; i++){
                        document.getElementById(ide[i]).style.width = "1.17vw"
                    }
                }
                else{
                    for(let i = 0; i<3; i++){  
                        document.getElementById(ide[i]).style.width = "2.5vw"
                    }
                }

            }
        }


    }
}



</script>

<style>
.measurebehindbars{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30.3vw;
        height: 25vw;
        left: 60.5vw;
        top: 7.4vw;
    }
</style>