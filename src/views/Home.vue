<template>
<div>

   <div class="item menu" v-bind:class="{close: menuClose}" @click="toggleMenuIcon(false, 'noid')">
                <div class="menuLine menuLine1"></div>
                <div class="menuLine menuLine2"></div>
                <div class="menuLine menuLine3"></div>
            </div>
            
           
            <div class="display" id="showmenu">
               
                <div class="header hiddenheader"><a><img src="../assets/logotype.svg"  @click="toggleMenuIcon(true, 'main')" alt="logotype" class="logotypesize"></a></div>
    
                <ul class="alternatives">
                    <li><a @click="toggleMenuIcon(true, 'trafikstatistik')">Trafikstatistik</a></li>
                    <li><a @click="toggleMenuIcon(true, 'trafikhändelser')">Trafikhändelser</a></li>
                    <li><a @click="toggleMenuIcon(true, 'program')">Program</a></li>
                </ul>
                
                
                
                <ul class="omoss">
                    <router-link to="/omoss"><li>Om Oss</li></router-link>
                </ul>
                
            </div>
            <div id="clickawayfromburger" @click="toggleMenuIcon(false, '')"></div>
        </div>

        <div id="scroller">
        <!--STARING SIDA-->
            <section id="main" class="pagelayout">
                    <div class="header">
                        <router-link to="/"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize"></router-link>
                        <nav class="navbarforpc">
                            <ul class="removelistdecoration">
                                <li class="navbartext"><router-link to="/trafikstatistik" class="navbarhover">Trafikstatistik</router-link></li>
                                <li class="navbartext"><router-link to="/trafikhandelser" class="navbarhover">Trafikhändelser</router-link></li>
                                <li class="navbartext"><router-link to="/program" class="navbarhover">Program</router-link></li>
                            </ul>
                        </nav>  
                        <router-link to="/omoss" class="omosspc navbarhover">
                            Om Oss
                        </router-link>
                    </div>
                    <!--MOBILE DESCRIPTION-->
                    <span id="topspan">
                        Hej och välkommen till RadioStats!
                        <p id="marginfromtopspan">Här finns statistik från Sveriges radio.</p>
                    </span>
                    <div class="barsonmainpage">
                        <div class="bars bar1"></div>
                        <div class="bars bar2 orange"></div>
                        <div class="bars bar3"></div>
                    </div>
                    <span id="bottomspan">
                        Swipa ner för att börja
                    </span>
                    <!--PC DESCRIPTION-->
                    <span id="leftspanpc" class="leftdescription">
                        <h1 class="titlepc">Hej och välkommen till RadioStats!</h1>
                        <p>Här finns visualiseringar av data från Sveriges radio.</p>
                        <p>Lek runt med statistiken för att lära dig mer.</p>
                    </span>
                    <!--PC BARS-->
                    <div class="rightlayoutpc">
                        <div class="mainpcshapes">
                            <router-link to="/trafikstatistik">
                            <div class="barsonmainpagepc">
                                <div class="normalflex">
                                    <div class="bar2 orange"></div>
                                    <div class="circlebox orange"></div>
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="mainpcshapes">
                            <router-link to="/trafikhandelser">
                            <div class="barsonmainpagepc">
                                <div class="bars bar1"></div>
                                <div class="bars bar2 orange"></div>
                                <div class="bars bar3"></div>
                            </div>
                            </router-link>
                        </div>
                        <div class="mainpcshapes">
                            <router-link to="/program">
                            <div class="barsonmainpagepc layingbars">
                                <div class="bars bar1"></div>
                                <div class="bars bar2 orange"></div>
                                <div class="bars bar3"></div>
                            </div>
                            </router-link>
                        </div>

                        <div class="textundershapes">Trafikstatistik</div>
                        <div class="textundershapes">Trafikhändelser</div>
                        <div class="textundershapes">Program</div>
                    </div>

                <img src="../assets/arrow2.png" alt="arrow" id="mainpageimg">
            </section>
        <!--SIDA 1-->
            <section class="pagelayout" id="trafikstatistik">
                <div class="header"><h1 class="titlesmobile">Trafiksstatistik</h1>
                <a href="#" id="buttonInfo1" class="linkinfobuttons"><img src="../assets/info.svg" class="infobutton" alt="infobutton"></a> 
                    <div class="showinfomessage" id="infomessage1">Jämför trafikhändelser mellan Malmö, Göteborg och
                        Stockholm.<p><br></p></div>
                    <a href="#main"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></a>
                    
                    <a href="aboutus.html" class="omosspc">
                        Om Oss
                    </a>
                </div>
               
                    <!--Slide out statestik för trafikstatistik(MOBILE)-->
                    <div id="layoutinaccidents">
    
                        <div class="barsoncrashes">
                            <h3 class="rotatenormal layunder titleoverbars">Vägtrafik</h3>
                            <div class="trafikstatistik">
                                    <div id="sthlmroad" class="barsintrafik purple"><div v-if = "outAndInSthlm" class="amountinbars">{{ this.$store.state.sthlmRoad.length }}</div></div> 
                                    <div id="goteborgroad" class="barsintrafik orange"><div v-if = "outAndInGoteborg" class="amountinbars">{{ this.$store.state.goteborgRoad.length }}</div></div>
                                    <div id="malmoroad" class="barsintrafik green"><div v-if = "outAndInMalmo" class="amountinbars">{{ this.$store.state.malmoRoad.length }}</div></div> 
                            </div>
                            <h3 class="rotatenormal layunder titleoverbars">Kollektivtrafik</h3>
                            <div class="trafikstatistik">
                                    <div id="sthlmkollektiv" class="barsintrafik purple"><div v-if = "outAndInSthlm" class="amountinbars">{{ this.$store.state.sthlmKollektiv.length }}</div></div> 
                                    <div id="goteborgkollektiv" class="barsintrafik orange"><div v-if = "outAndInGoteborg" class="amountinbars">{{ this.$store.state.goteborgKollektiv.length }}</div></div> 
                                    <div id="malmokollektiv" class="barsintrafik green"><div v-if = "outAndInMalmo" class="amountinbars">{{ this.$store.state.malmoKollektiv.length }}</div></div> 
                            </div>
                            <h3 class="rotatenormal layunder titleoverbars">Övrigt</h3>
                            <div class="trafikstatistik">
                                    <div id="sthlmovrigt" class="barsintrafik purple"><div v-if = "outAndInSthlm" class="amountinbars">{{ this.$store.state.sthlmOvrigt.length }}</div></div> 
                                    <div id="goteborgovrigt" class="barsintrafik orange"><div v-if = "outAndInGoteborg" class="amountinbars">{{ this.$store.state.goteborgOvrigt.length }}</div></div>
                                    <div id="malmoovrigt" class="barsintrafik green"><div v-if = "outAndInMalmo" class="amountinbars">{{ this.$store.state.malmoOvrigt.length }}</div></div> 
                            </div>
                        </div>
    
    
                        <!--Knappar för trafikstatistik-->
                        <div class="buttoncontainer">
                            <div class="buttons">
                                <input type="checkbox" class="btn" id="stockholm" @click="changeWidth(this.$store.state.sthlmRoad, this.$store.state.sthlmKollektiv, this.$store.state.sthlmOvrigt, 'sthlmroad', 'sthlmkollektiv', 'sthlmovrigt')">
                                <input type="checkbox" class="btn" id="goteborg" @click="changeWidth(this.$store.state.goteborgRoad, this.$store.state.goteborgKollektiv, this.$store.state.goteborgOvrigt, 'goteborgroad', 'goteborgkollektiv', 'goteborgovrigt')">
                                <input type="checkbox" class="btn" id="malmo" @click="changeWidth(this.$store.state.malmoRoad, this.$store.state.malmoKollektiv, this.$store.state.malmoOvrigt, 'malmoroad', 'malmokollektiv', 'malmoovrigt')">
                                <label for="stockholm" class="textforcheckbox">Stockholm</label>
                                <label for="goteborg" class="textforcheckbox">Göteborg</label>
                                <label for="malmo" class="textforcheckbox">Malmö</label>
                            </div>
                        </div>
                    </div>
            </section>
        <!--SIDA 2-->
            <section class="pagelayout" id="trafikhändelser">
                <div class="header"><h1 class="titlesmobile">Trafikhändelser</h1>
                <a href="#" id="buttonInfo2" class="linkinfobuttons"><img src="../assets/info.svg" class="infobutton" alt="infobutton"></a>
               <div class="showinfomessage" id="infomessage2">Här ser du en karta över fyra zoner i Göteborg, östra,
                    västra, norra och centrala.
                    <br><br>
                    <p>Välj trafikkategori. På kartan symboliserar trafikhändelser och plats.</p><br>
                    <p>Klicka på en zon för att få reda på mer om händelserna.</p></div>
                <a href="#main"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></a>
                <!--PC NAVBAR-->
                <nav class="navbarforpc">
                <ul class="removelistdecoration">
                    <li><a href="trafikstatistik.html">Trafikstatistik</a></li>
                    <li class="boldonwhatpage"><a href="trafikhandelser.html">Trafikhändelser</a></li>
                    <li><a href="program.html">Program</a></li>
                </ul>
            </nav>
            <a href="aboutus.html" class="omosspc">
                Om Oss
            </a>
            </div>

            <span class="leftdescription leftspan2pc">
                <h1 class="titlepc">Trafikhändelser</h1>
                <p>Se status i trafiken i Sveriges län.</p>
            </span>

            <div class="rightlayoutpc marginwithlayout">
                
            </div>
            <!--MOBILE STUFF-->

        <div id="mapOfGothenburg">
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
        </div>
        <img src="../assets/karta1.svg" class="karta1 imgtrafik" alt="Karta över göteborg">
        <img src="../assets/karta2.svg" class="karta2 imgtrafik" alt="Karta över göteborg">
        <img src="../assets/karta3.svg" class="karta3 imgtrafik" alt="Karta över göteborg">
        <img src="../assets/karta4.svg" class="karta4 imgtrafik" alt="Karta över göteborg">
        
        <div @click="popupList('norr')" class="kartanorr clickindex"></div>
        <div @click="popupList('east')" class="kartaeast clickindex"></div>
        <div @click="popupList('centrum')" class="kartacentrum clickindex"></div>
        <div @click="popupList('west')" class="kartawest clickindex"></div>
        
                        <div class="buttoncontainer buttoncontainerforhandelser">
                            <div class="buttons">
                                <input type="checkbox" class="btn" id="buttonroad" @click="showIconsOnMap('road')">
                                <input type="checkbox" class="btn" id="buttonkollektiv" @click="showIconsOnMap('kollektiv')">
                                <input type="checkbox" class="btn" id="buttonovrigt" @click="showIconsOnMap('ovrigt')">
                                <label for="buttonroad" class="textforcheckbox">Vägtrafik</label>
                                <label for="buttonkollektiv" class="textforcheckbox">Kollektiv</label>
                                <label for="buttonovrigt" class="textforcheckbox">Övrigt</label>
                            </div>
                        </div>
       
        
        
        <div class="popup" v-if="this.showNorr"><h1 class="titelpopup">Hisingen</h1><div class="closepopup" @click="popupList('norr')"> <img class="closecross" src="../assets/cross.svg"></div>
            <div class="messageBox">    
                <div v-for="elements of this.$store.state.norrList" v-bind:key="elements" class="listMessage">
                    <div class="imagediv">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageicon">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageicon">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageicon">
                    </div>
                    <div class="textdiv">
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

        <div class="popup" v-if="this.showEast"><h1 class="titelpopup">Östra Göteborg</h1><div class="closepopup" @click="popupList('east')"> <img class="closecross" src="../assets/cross.svg"> </div>
            <div class="messageBox">    
                <div v-for="elements of this.$store.state.eastList" v-bind:key="elements" class="listMessage">
                    <div class="imagediv">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageicon">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageicon">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageicon">
                    </div>
                    <div class="textdiv">
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
        
        <div class="popup" v-if="this.showWest"><h1 class="titelpopup">Västra Göteborg</h1><div class="closepopup" @click="popupList('west')"> <img class="closecross" src="../assets/cross.svg"> </div>
            <div class="messageBox">    
                <div v-for="elements of this.$store.state.westList" v-bind:key="elements" class="listMessage">
                    <div class="imagediv">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageicon">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageicon">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageicon">
                    </div>
                    <div class="textdiv">
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
        
        <div class="popup" v-if="this.showCentrum"><h1 class="titelpopup">Centrum</h1><div class="closepopup" @click="popupList('centrum')"> <img class="closecross" src="../assets/cross.svg"> </div>
            <div class="messageBox">    
                <div v-for="elements of this.$store.state.centrumList" v-bind:key="elements" class="listMessage">
                    <div class="imagediv">
                        <img v-if="elements.category===3" src="../assets/triangel.svg" class="smallimageicon">
                        <img v-if="elements.category===1" src="../assets/circel.svg" class="smallimageicon">
                        <img v-if="elements.category===0" src="../assets/kvadrat.svg" class="smallimageicon">
                    </div>
                    <div class="textdiv">
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
        <!--SIDA 3-->
            <section class="pagelayout" id="program">
                <div class="header"><h1 class="titlesmobile">Program</h1><a href="#" id="buttonInfo3" class="linkinfobuttons"><img src="../assets/info.svg" class="infobutton" alt="infobutton"></a>
                <div class="showinfomessage" id="infomessage3">Välj en eller flera av 4 teman för att se utbud av program och dokumentärer.</div>
                <a href="#main"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></a>
                <!--PC NAVBAR-->
                <nav class="navbarforpc">
                    <ul class="removelistdecoration">
                        <li><a href="#trafiksstatistik">Trafikstatistik</a></li>
                        <li><a href="#trafikhändelser">Trafikhändelser</a></li>
                        <li class="boldonwhatpage"><a href="#program">Program</a></li>
                    </ul>
                </nav>
                <router-link to="/omoss" class="omosspc">
                    Om Oss
                </router-link>
                 </div>

                 <span class="leftdescription leftspan2pc">
                    <h1 class="titlepc">Program</h1>
                    <p>Välj tema och se utbud av dokumentärer och poddar.</p>
                </span>
    
                <div class="rightlayoutpc marginwithlayout">
                    
                </div>
    
                <!--MOBILE STUFF-->
     
    <div class="container">
      <div class="barbox">
        <div class="rotate">
          <div id="docBar" class="box three floatleft"></div>
          <div v-if="outAndInDoku" class="rotate">{{ this.$store.state.documentaryList.length }}</div>
          <div v-else class="rotate"> - </div>
        </div>
        <div class="rotate">
            <div id="musicBar" class="box three floatleft"></div>
            <div v-if="outAndInMusic" class="rotate">{{ this.$store.state.musicList.length }}</div>
            <div v-else class="rotate"> - </div>
        </div>
        <div class="rotate">
            <div id="sportBar" class="box three floatleft"></div>
            <div v-if="outAndInSport" class="rotate">{{ this.$store.state.sportList.length }}</div>
            <div v-else class="rotate"> - </div>
        </div>
          <div class="rotate">
            <div id="humourBar" class="box three floatleft"></div>
            <div v-if="outAndInHumour" class="rotate">{{ this.$store.state.humourList.length }}</div>
            <div v-else class="rotate"> - </div>
        </div>
      </div>
    <div class="buttoncontainer buttoncontainerforprogram">
                            <div class="buttons">
                                <input type="checkbox" class="btn btnprogram" id="buttondoc" @click="changeProgramWidth('docBar');sortAlphabetically('alphabetically', false)">
                                <input type="checkbox" class="btn btnprogram" id="buttonmus" @click="changeProgramWidth('musicBar');sortAlphabetically('alphabetically', false)">
                                <input type="checkbox" class="btn btnprogram" id="buttonspo" @click="changeProgramWidth('sportBar');sortAlphabetically('alphabetically', false)">
                                <input type="checkbox" class="btn btnprogram" id="buttonhum" @click="changeProgramWidth('humourBar');sortAlphabetically('alphabetically', false)">
                                <label for="buttondoc" class="textforcheckbox programcheckbox">Doku</label>
                                <label for="buttonmus" class="textforcheckbox programcheckbox">Musik</label>
                                <label for="buttonspo" class="textforcheckbox programcheckbox">Sport</label>
                                <label for="buttonhum" class="textforcheckbox programcheckbox">Humor</label>
                            </div>
                        </div>
      
      <div class="programbox">
        <div v-if="outAndInDoku && !sorted">
          <div class="programs" v-for="programs of this.$store.state.documentaryList" v-bind:key="programs">
            <a target="_blank" :href="programs.programurl">
            <img class="image" :src="programs.programimage"
            /></a>
            <div class="listtext">
                <em>{{ programs.name }}</em>{{programs.description}}
            </div>
          </div>
        </div>
      

      <div v-if="outAndInMusic && !sorted">
        <div class="programs" v-for="programs of this.$store.state.musicList" v-bind:key="programs">
            <a target="_blank" :href="programs.programurl">
              <img class="image" :src="programs.programimage"
            /></a>
            <div class="listtext">
              <em>{{ programs.name }}</em>{{programs.description}}
            </div>
        </div>
      </div>

      <div v-if="outAndInSport && !sorted">  
        <div class="programs" v-for="programs of this.$store.state.sportList" v-bind:key="programs">
          <a target="_blank" :href="programs.programurl">
            <img class="image" :src="programs.programimage"
          /></a>
          <div class="listtext">
            <em>{{ programs.name }}</em>{{programs.description}}
          </div>
        </div>
      </div>

      <div v-if="outAndInHumour && !sorted">
        <div class="programs" v-for="programs of this.$store.state.humourList" v-bind:key="programs">
            <a target="_blank" :href="programs.programurl">
              <img class="image" :src="programs.programimage"
            /></a>
            <div class="listtext">
              <em>{{ programs.name }}</em>{{programs.description}}
            </div>
        </div>
      </div>

      <div v-if="this.sorted">
        <div class="programs" v-for="programs of sortedAlphaList" v-bind:key="programs">
            <a target="_blank" :href="programs.programurl">
              <img class="image" :src="programs.programimage"
            /></a>
            <div class="listtext">
              <em>{{ programs.name }}</em>{{programs.description}}
            </div>
        </div>
      </div>


      </div>
      
      </div>

      
      

      
        
            </section>
          </div>
</template>

<script>


   import MapLocations from '../components/maplocations.vue'
export default {
    data() {
        
        return {
            outAndInGoteborg: false,
            outAndInMalmo: false,
            outAndInSthlm: false,
            outAndInDoku: false,
            outAndInMusic: false,
            outAndInSport: false,
            outAndInHumour: false,
            sorted: false,
            sortedAlphaList: [],
            menuClose: false,
            moreInfo: false,
            showInfo1: false,
            showInfo2: false,
            showInfo3: false,
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
        openSideMenu(){
                document.getElementById("showmenu").style.left = "0"
                document.getElementById("clickawayfromburger").style.right = "0"
                document.getElementById("scroller").style.filter = "blur(1vw)"
            },
            closeSideMenu(){
                document.getElementById("showmenu").style.left = "-100vw"
                document.getElementById("clickawayfromburger").style.right = "-30vw"
                document.getElementById("scroller").style.filter = "blur(0)"
            },
            toggleMenuIcon(trueorfalse, id){
               
                if(!this.menuClose){
                    this.openSideMenu()
                }
                else{
                    this.closeSideMenu()
                }
                
                this.menuClose = !this.menuClose
                
                
               if(trueorfalse){
                    this.scrollToElement(id)
               }
            },

            scrollToElement(id){
                let element = document.getElementById(id)
                element.scrollIntoView(true)
            },
            openMoreInfo(){
                document.getElementById("hiddenblockinburger").style.visibility = "visible"
                document.getElementById("arrowswitchimg").style.transform = "rotate(0)"
            },
            closeMoreInfo(){
                document.getElementById("hiddenblockinburger").style.visibility = "hidden"
                document.getElementById("arrowswitchimg").style.transform = "rotate(180deg)"
            },
            toggleMoreInfo(){
                if(!this.moreInfo){
                    this.openMoreInfo()
                }
                else{
                    this.closeMoreInfo()
                }
                this.moreInfo = !this.moreInfo
            },
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
        
        checkStatus(type1, type2, type3, ide1, ide2, ide3, outAndIn){
            let ide = [ide1, ide2, ide3]
            let type = [type1, type2, type3]
            let x = window.matchMedia("(min-width: 800px)")
            if(!outAndIn){
                if (x.matches) {
                    for(let i = 0; i<3; i++){
                        document.getElementById(ide[i]).style.width = 1+(1*(type[i]).length)+"vw"
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
                        document.getElementById(ide[i]).style.width = "1vw"
                    }
                }
                else{
                    for(let i = 0; i<3; i++){  
                        document.getElementById(ide[i]).style.width = "2.5vw"
                    }
                }

            }
        },

        changeProgramWidth(barId) {
            if (barId === 'docBar') {
                this.checkAndChangeStatus(barId, this.$store.state.documentaryList, this.outAndInDoku)
                this.outAndInDoku = !this.outAndInDoku;
            }
            if (barId === "musicBar") {
                this.checkAndChangeStatus(barId, this.$store.state.musicList ,this.outAndInMusic)
                this.outAndInMusic = !this.outAndInMusic;
            }
            if (barId === "sportBar") {
                this.checkAndChangeStatus(barId, this.$store.state.sportList, this.outAndInSport)
                this.outAndInSport = !this.outAndInSport;
            }
            if (barId === "humourBar") {
                this.checkAndChangeStatus(barId, this.$store.state.humourList ,this.outAndInHumour)
                this.outAndInHumour = !this.outAndInHumour;
            }

            this.outAndIn = !this.outAndIn;
        },

        checkAndChangeStatus(barId, value, outAndIn) {
            if (!outAndIn) {
              if(value.length >= 100){
                document.getElementById(barId).style.height = "50vh";
              }else{
                document.getElementById(barId).style.height = (value.length/2.5)+"vh";
              }
              
            } else {
              document.getElementById(barId).style.height = "1vh";
            }
            
        },
        sortAlphabetically(sortBy, sorting){
            this.sortedAlphaList = []
            if(this.outAndInDoku === true){
                for(let program of this.$store.state.documentaryList){
                    this.sortedAlphaList.push(program)
                   
                }
            }
            if(this.outAndInMusic === true){
                for(let program of this.$store.state.musicList){
                    this.sortedAlphaList.push(program)
                }
            }
            if(this.outAndInSport === true){
                for(let program of this.$store.state.sportList){
                    this.sortedAlphaList.push(program)
                }
            }
            if(this.outAndInHumour === true){
                for(let program of this.$store.state.humourList){
                    this.sortedAlphaList.push(program)
                }
            }
            if(sortBy === 'alphabetically'){
                this.sortedAlphaList.sort((a, b) => (a.name > b.name) ? 1 : -1)
            }
            if(sorting === true){
                this.sorted = !this.sorted
            }
            
            
          }

        

          


    },
    
}
</script>

<style>

    #buttondoc:checked{
        background-color: #C76C5F; 
    }
    #buttonmus:checked{
        background-color: #724B77; 
    }
    #buttonspo:checked{
        background-color: #A3C78E; 
    }
    #buttonhum:checked{
        background-color: #7594A8; 
    }

    .btnprogram{
        margin-left: 5vw;
    }
    .programcheckbox{
        font-size: 4.5vw;
    }
    .buttoncontainerforhandelser{
        margin-top: 20vw;
    }
    .buttoncontainerforprogram{
        margin-top: 40vh;
    }
    .closecross{
        width: 8vw;
        padding-top: 2vw;
        padding-right: 1vw;
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
    #trafikhändelser{
        position: relative;
    }
    #map{
            position: absolute;
        }


        #norrlandroad{
            position: absolute;
            width: 10vw;
            height: 6vh;
            background-color: blue;
            top: 25vh;
            left: 20vw;
            border-radius: 50%;
        }
        #mapOfGothenburg{
            width: 91vw;
            height: 100vw;
            left: 5.5vw;
            top: 9vw;
            position: relative;
            
            
        }

        .popup{
            position: absolute;
            top: 15vh;
            left: 10vw;
            width: 80vw;
            height: 60vh;
            background-color: rgba(255,255,255,0.9);
            z-index: 10;
            border-radius: 4vw;
        
        }

        .imgtrafik{
            position: absolute;
            width: 50vw;
            z-index: 1;
        }
        .karta1{
            
            top: 25vw;
            width: 58vw;
            left: 3vw;
           
            
        }
        .karta2{
            top: 25vw;
            right: -3vw;
            
           
        }
        .karta3{
            top: 70.5vw;
            left: 44vw;
           
        
        }
        .karta4{
            top: 76.5vw;
            width: 80vw;
            left: 5vw;
     
           
        }
        
        .smallIcon{
            width: 4vw;
            height: 4vw;
        
            position: absolute;
            z-index: 6;
         
        }
        #coolmap{
            width: 100vw;
            position: absolute;
        }
        .road{
            border-radius: 0.5vw;
            background-color: #C76C5F;
            border: 0.2vw solid black;
        }
        .kollektiv{
            border-radius: 2vw;
            background-color: #724B77;
            border: 0.2vw solid black;
        }
        .ovrigt{
            width: 0;
            height: 0;
            border-left: 2vw solid transparent;
            border-right: 2vw solid transparent;
            border-bottom: 4vw solid #A3C78E;
        }
        .closepopup{
          
            width: 10vw;
            height: 10vw;
            margin-top: 0;
            right: 0;
            position: absolute;  
            top: 0; 
        }
        .listMessage{
            width: 100%;
            display: flex;
            
           
            flex-direction: row;
            margin-bottom: 8vh;
            
        }

        .messageBox{
            margin-top: 3vh;
            width: 90%;
            margin-left: 5%;
            height: 50vh;
            overflow-y: auto;
            
        }
        .checkboxarna{
            margin-top: 30vw;
            display: flex;
            justify-content: space-around;
            background-color: blue;
            width: 80vw; 
            margin-left: 10vw;   
        }

        .kartawest{
            width: 50vw;
            height: 44vw;
            top: 82vw;
            left: 5vw;
            z-index: 2;
        }
        .kartaeast{
            width: 40vw;
            right: 3vw;
            top: 26vw;
            height: 60vw;
            z-index: 3;
        }
        .kartanorr{
            width: 50vw;
            top: 26vw;
            left: 6vw;
            height: 55vw;
            z-index: 4;
        }
        .kartacentrum{
            width: 9vw;
            height: 15vw;
            left: 48vw;
            top: 74vw;
            z-index: 5;
        }
        .clickindex{    
            position: absolute;
        }
       h1{
            text-align: center;
            opacity: 1;
       }
       h3{
           margin: 0;
       }
       .smallimageicon{
        width: 5vw;
    
       }
       .imagediv{
        
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
       }
       .textdiv{
            width: 170vw;
       }

    #docBar{
        background-color: #C76C5F;
    }
    #musicBar{
        background-color: #724B77;
    }
    #humourBar{
        background-color: #7594A8;
    }
    #sportBar{
        background-color: #A3C78E;
    }

    .barbox{
        position: absolute;
        top: 2vh;
        left: 2.5vw;
        width: 95vw;
        height: 65vw;
        background-color: white;
        display: flex;
        justify-content: space-around;
    }
    #layoutprograms{
        height: 90vh;
        width: 100vw;
        background-color: green;
        display: relative;
        justify-content: space-around;
    }
    .checkboxbar{
        width: 15vw;
        height: 15vw;
        
    }
    .checkboxes{
        width: 90vw;
        height: 10vwh; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        bottom: 34vh;
        left: 5vw;
        
    }   
    .image {
      width: 14vh;
    }
    
    .programs {
      width: 80vw;
      margin-left: 10vw;
      margin-bottom: 3vw;
      height: 14vh;
      display: flex;
      background-color:white;
      
    }
    .programbox {
      top: 67vh;
     
      width: 100vw;
      height: auto;
      position: absolute;
      
    }
    .listtext {
      display: flex;
      flex-direction: column;
      width: 55vw;
      margin-left: 5vw;
      overflow-y: auto;
    }
    .container {
      width: 100vw;
      height: 90vh;
      display: flex;
      justify-content: space-around;
      position: relative;
      overflow-y: auto;

    }

    .box {
      width: 15vw;
      height: 2vh;
      transition-duration: 0.7s;
      transition-property: height;

      /*transform: rotate(90deg);*/
    }
    .three {
      background: #9ceaef;
      transition-timing-function: ease-out;
    }
    #checkbo {
      width: 5vw;
      height: 5vh;
    }
    #test {
      width: 50vw;
      height: 10vh;
      background-color: green;
    }
   
    
    .rotate {
      transform: rotate(180deg);
      text-align: center;
      font-size: 6vw;
    }
    #program{
        position: relative;
    }
    .titelpopup{
        padding-top: 2vh;
    }


    
</style>
