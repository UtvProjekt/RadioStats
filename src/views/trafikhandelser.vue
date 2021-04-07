<template>

<section id="main" class="pagelayout">
    <div class="header">
        <router-link to="/" class="logonotindexpage"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></router-link>
        <nav class="navbarforpc">
            <ul class="removelistdecoration">
                <li class="navbartext"><router-link to="/trafikstatistik" class="navbarhover">Trafikstatistik</router-link></li>
                <li class="navbartext"><router-link to="/trafikhandelser" class="navbarhover boldonwhatpage">Trafikhändelser</router-link></li>
                <li class="navbartext"><router-link to="/program" class="navbarhover">Program</router-link></li>
            </ul>
        </nav>  
        <router-link to="/omoss" class="omosspc navbarhover">
        Om Oss
        </router-link>
    </div>

    <span class="leftdescription leftspan2pc">
        <h1 class="titlepc">Trafikstörningar</h1>
        <p>Se status i trafiken lokalt inom Göteborg.</p>
    </span>

    <div class="rightlayoutpc notindexpages">

            
            
            <div class="layoutinhandelser">
            
                <div class="buttoncontainer">
                    <div class="buttons">
                        <input type="checkbox" id="buttonroad" class="btn" @click="showIconsOnMap('road')">
                        <input type="checkbox" id="buttonkollektiv" class="btn" @click="showIconsOnMap('kollektiv')">
                        <input type="checkbox" id="buttonovrigt" class="btn" @click="showIconsOnMap('ovrigt')">
                    </div>

                    <div class="buttons">
                        <label for="roadbutton" class="textforcheckbox">Vägtrafik</label>
                        <label for="kollektivbutton" class="textforcheckbox">Kollektivtrafik</label>
                        <label for="ovrigtbutton" class="textforcheckbox">Övrigt</label>
                    </div>
                </div>
                
                <div id="mapOfGothenburgpc">
                    <MapLocations v-if="showRoad" classtype="road" :name="this.$store.state.norrRoad" multiplierx="90" multipliery="105"></MapLocations>
                    <MapLocations v-if="showKollektiv" classtype="kollektiv" :name="this.$store.state.norrKollektiv" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showOvrigt" classtype="ovrigt" :name="this.$store.state.norrOvrigt" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showRoad" classtype="road" :name="this.$store.state.eastRoad" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showKollektiv" classtype="kollektiv" :name="this.$store.state.eastKollektiv" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showOvrigt" classtype="ovrigt" :name="this.$store.state.eastOvrigt" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showRoad" classtype="road" :name="this.$store.state.westRoad" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showKollektiv" classtype="kollektiv" :name="this.$store.state.westKollektiv" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showOvrigt" classtype="ovrigt" :name="this.$store.state.westOvrigt" multiplierx="100" multipliery="100"></MapLocations>
                    <MapLocations v-if="showRoad" classtype="road" :name="this.$store.state.centrumRoad" multiplierx="98" multipliery="98"></MapLocations>
                    <MapLocations v-if="showKollektiv" classtype="kollektiv" :name="this.$store.state.centrumKollektiv" multiplierx="98" multipliery="98"></MapLocations>
                    <MapLocations v-if="showOvrigt" classtype="ovrigt" :name="this.$store.state.centrumOvrigt" multiplierx="98" multipliery="98"></MapLocations> 
                    <img src="../assets/karta1.svg" class="karta1pc imgtrafikpc" alt="Karta över göteborg">
                    <img src="../assets/karta2.svg" class="karta2pc imgtrafikpc" alt="Karta över göteborg">
                    <img src="../assets/karta3.svg" class="karta3pc imgtrafikpc" alt="Karta över göteborg">
                    <img src="../assets/karta4.svg" class="karta4pc imgtrafikpc" alt="Karta över göteborg">
                    
                    <div @click="popupList('norr')" class="kartanorrpc clickindexpc"></div>
                    <div @click="popupList('east')" class="kartaeastpc clickindexpc"></div>
                    <div @click="popupList('centrum')" class="kartacentrumpc clickindexpc"></div>
                    <div @click="popupList('west')" class="kartawestpc clickindexpc"></div>
                </div>
            </div>
            </div>
        

        
        
        <div class="popuppc" v-if="this.showNorr"><h1 class="titelpopup">Hisingen</h1><div class="closepopuppc" @click="popupList('norr')"> <img class="closecrosspc" src="../assets/cross.svg"></div>
            <div class="messageBoxpc">    
                <div v-for="elements of this.$store.state.norrList" v-bind:key="elements" class="listMessagepc">
                    <div class="imagedivpc">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageiconpc">
                    </div>
                    <div class="textdivpc">
                        <h3 v-if="elements.priority===3">Störning</h3>
                        <h3 v-if="elements.priority===2">Stor händelse</h3>
                        <h3 v-if="elements.priority===1">Mycket Allvarlig Händelse</h3>
                        <h3 v-if="elements.priority===4">Information</h3>
                        <h3 v-if="elements.priority===5">Mindre Störning</h3>
                        <h4>{{elements.title}}</h4>
                        <div>{{elements.description}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popuppc" v-if="this.showEast"><h1 class="titelpopuppc">Östra Göteborg</h1><div class="closepopuppc" @click="popupList('east')"> <img class="closecrosspc" src="../assets/cross.svg"> </div>
            <div class="messageBoxpc">    
                <div v-for="elements of this.$store.state.eastList" v-bind:key="elements" class="listMessagepc">
                    <div class="imagedivpc">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageiconpc">
                    </div>
                    <div class="textdivpc">
                        <h3 v-if="elements.priority===3">Störning</h3>
                        <h3 v-if="elements.priority===2">Stor händelse</h3>
                        <h3 v-if="elements.priority===1">Mycket Allvarlig Händelse</h3>
                        <h3 v-if="elements.priority===4">Information</h3>
                        <h3 v-if="elements.priority===5">Mindre Störning</h3>
                        <h4>{{elements.title}}</h4>
                        <div>{{elements.description}}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="popuppc" v-if="this.showWest"><h1 class="titelpopuppc">Västra Göteborg</h1><div class="closepopuppc" @click="popupList('west')"> <img class="closecrosspc" src="../assets/cross.svg"> </div>
            <div class="messageBoxpc">    
                <div v-for="elements of this.$store.state.westList" v-bind:key="elements" class="listMessagepc">
                    <div class="imagedivpc">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageiconpc">
                    </div>
                    <div class="textdivpc">
                        <h3 v-if="elements.priority===3">Störning</h3>
                        <h3 v-if="elements.priority===2">Stor händelse</h3>
                        <h3 v-if="elements.priority===1">Mycket Allvarlig Händelse</h3>
                        <h3 v-if="elements.priority===4">Information</h3>
                        <h3 v-if="elements.priority===5">Mindre Störning</h3>
                        <h4>{{elements.title}}</h4>
                        <div>{{elements.description}}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="popuppc" v-if="this.showCentrum"><h1 class="titelpopup">Centrum</h1><div class="closepopuppc" @click="popupList('centrum')"> <img class="closecrosspc" src="../assets/cross.svg"> </div>
            <div class="messageBoxpc">    
                <div v-for="elements of this.$store.state.centrumList" v-bind:key="elements" class="listMessagepc">
                    <div class="imagedivpc">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageiconpc">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageiconpc">
                    </div>
                    <div class="textdivpc">
                        <h3 v-if="elements.priority===3">Störning</h3>
                        <h3 v-if="elements.priority===2">Stor händelse</h3>
                        <h3 v-if="elements.priority===1">Mycket Allvarlig Händelse</h3>
                        <h3 v-if="elements.priority===4">Information</h3>
                        <h3 v-if="elements.priority===5">Mindre Störning</h3>
                        <h4>{{elements.title}}</h4>
                        <div>{{elements.description}}</div>
                    </div>
                </div>
            </div>
       
</div>
     
                   

</section>


</template>



<script>
   import MapLocations from '../components/maplocations.vue'
export default {
    data() {
        
        return {
            showNorr: false,
            showEast: false,
            showCentrum: false,
            showWest: false,
            showRoad: false,
            showKollektiv: false,
            showOvrigt: false,
        }
    },
    components: {
        MapLocations,
    },
    methods: {
        popupList(show){
            if(show === "norr")
            {
                this.showNorr = !this.showNorr
            }
            else if(show === "east"){
                this.showEast = !this.showEast
            }
            else if(show === "west"){
                this.showWest = !this.showWest
            }
            else if(show === "centrum"){
                this.showCentrum = !this.showCentrum
            }
            
        },
        showIconsOnMap(typeOfAccident){
            if(typeOfAccident === 'road'){
                this.showRoad = !this.showRoad
            }
            if(typeOfAccident === 'kollektiv'){
                this.showKollektiv = !this.showKollektiv
            }
            if(typeOfAccident === 'ovrigt'){
                this.showOvrigt = !this.showOvrigt
            }
        },

    },
    
}



</script>




<style>
    .rightlayoutpc{
        overflow-y: hidden;
    }
    #roadbutton:checked{
        background-color: brown;
    }
    #kollektivbutton:checked{
        background-color: yellow;
    }
    #ovrigtbutton:checked{
        background-color: red;
    }

     .closecrosspc{
        width: 2vw;
        padding-top: 0.6vw;
        margin-right: 1.5vw;
        cursor: pointer;
    }
    #buttonroad:checked{
        background-color: #C76C5F;
    }
    #buttonkollektiv:checked{
        background-color: #724B77;
    }
    #buttonovrigt:checked{
        background-color: #A3C78E;
    }
    #trafikhändelserpc{
        position: relative;
    }
    #mappc{
            position: absolute;
        }

        #mapOfGothenburgpc{
            width: 80.5vw;
            height: 33.5vw;
            right: 5vw;
            top: 5vw;
            position: relative;
            overflow-y: hidden;
            overflow-x: hidden;
    
        }

        .popuppc{
            position: absolute;
            top: 15vh;
            right: 2vw;
            width: 45vw;
            height: 70vh;
            background-color: rgba(255,255,255,0.9);
            z-index: 10;
            border-radius: 1vw;
        
        }

        .imgtrafikpc{
            position: absolute;
            z-index: 1;
        
        }
        .karta1pc{
            
            top: -0.9vw;
            left: -1vw;
            width: 20vw;
            
        }
        .karta2pc{
            top: -0.5vw;
            right: -2.3vw;
            width: 17vw;
            
           
        }
        .karta3pc{
            top: 15vw;
            right: 1.8vw;
            width: 16vw;
           
        
        }
        .karta4pc{
            top: 17vw;
            right: 4.2vw;
            width: 26vw;
     
           
        }
        
        .smallIconpc{
            width: 4vw;
            height: 4vw;
        
            position: absolute;
            z-index: 6;
            color: red;
        }
        #coolmappc{
            width: 100vw;
            position: absolute;
            background-color: blue;
        }
        .roadpc{
            border-radius: 0.5vw;
            background-color: green;
        }
        .kollektivpc{
            border-radius: 2vw;
            background-color: red;
        }
        .ovrigtpc{
            width: 0;
            height: 0;
            border-left: 2vw solid transparent;
            border-right: 2vw solid transparent;
            border-bottom: 4vw solid blue;
        }
        .closepopuppc{
          
            width: 3vw;
            height: 3vw;
            margin-top: 0;
            right: 0;
            position: absolute;  
            top: 0; 
        }
        .listMessagepc{
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-bottom: 8vh;
            
        }

        .messageBoxpc{
            margin-top: 3vh;
            width: 90%;
            margin-left: 5%;
            height: 58vh;
            overflow-y: auto;
            
        }
        .checkboxarnapc{
            margin-top: 30vw;
        }

        .kartanorrpc{
            width: 18vw;
            height: 19vw;
            top: 0vw;
            left: 0vw;
            z-index: 2;
        }
        .kartaeastpc{
            width: 14vw;
            right: 0vw;
            top: 0vw;
            height: 21vw;
            z-index: 3;
        }
        .kartawestpc{
            width: 17vw;
            left: 0vw;
            bottom: 0vw;
            height: 15vw;
            z-index: 4;
        }
        .kartacentrumpc{
            width: 4vw;
            height: 6vw;
            left: 14vw;
            top: 15.5vw;
            z-index: 5;
        }
        .clickindexpc{    
            position: absolute;
            cursor: pointer;
        }
       h1{
            text-align: center;
            opacity: 1;
       }
       h3{
           margin: 0;
       }
       .smallimageiconpc{
        width: 3vw;
    
       }
       .imagedivpc{
        
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
       }
       .textdivpc{
            width: 170vw;
       }
 .titelpopuppc{
        padding-top: 2vh;
    }

    @media screen and (min-width: 700px){
        .smallIcon{
            width: 1.3vw;
            height: 1.3vw;
            

        }
        .road{
            border-radius: 0.1vw;
            background-color: #C76C5F;
            border: 0.15vw solid black;
        }
        .kollektiv{
            border-radius: 0.5vw;
            background-color: #724B77;
            border: 0.15vw solid black;
        }
        .ovrigt
        {   
            border-left: 0.65vw solid transparent;
            border-right: 0.65vw solid transparent;
            border-bottom: 1.3vw solid #A3C78E;
            
        }
    }



</style>