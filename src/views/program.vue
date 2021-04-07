<template>

<section class="pagelayout">
        <div class="header">
            <router-link to="/" class="logonotindexpage"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize removelogomobile"></router-link>
        
            <nav class="navbarforpc">
                <ul class="removelistdecoration">
                    <li class="navbartext"><router-link to="/trafikstatistik" class="navbarhover">Trafikstatistik</router-link></li>
                    <li class="navbartext"><router-link to="/trafikhandelser" class="navbarhover">Trafikhändelser</router-link></li>
                    <li class="navbartext"><router-link to="/program" class="navbarhover boldonwhatpage">Program</router-link></li>
                </ul>
            </nav>

            <router-link to="/omoss" class="omosspc navbarhover">
                Om Oss
            </router-link>
        </div>
  
        <span class="leftdescription leftspan2pc">
            <h1 class="titlepc">Program</h1>
            <p>Välj tema och se utbud av program</p>
        </span>

        <div class="rightlayoutpc notindexpages programoverflow">
            <div class="layoutinprogram">
                <div class="buttoncontainer">
                    <div class="buttons buttonsforprogram">
                        <input type="checkbox" id="buttondocumentary" class="btn" @click="changeProgramWidth('docBar');sortAlphabetically('alphabetically', false)">
                        <input type="checkbox" id="buttonmusic" class="btn" @click="changeProgramWidth('musicBar');sortAlphabetically('alphabetically', false)">
                        <input type="checkbox" id="buttonsport" class="btn" @click="changeProgramWidth('sportBar');sortAlphabetically('alphabetically', false)">
                        <input type="checkbox" id="buttonhumour" class="btn" @click="changeProgramWidth('humourBar');sortAlphabetically('alphabetically', false)">
                    </div>

                    <div class="buttons buttonsforprogram">
                        <label for="buttondocumentary" class="textforcheckbox">Dokumentär</label>
                        <label for="buttonmusic" class="textforcheckbox">Musik</label>
                        <label for="buttonsport" class="textforcheckbox">Sport</label>
                        <label for="buttonhumour" class="textforcheckbox">Humor</label>
                    </div>
                </div>
                <div class="pcprogrambars">
        <div class="pcbarone">
            <div id="docBar" class="barsinprogram boxprogram three floatleft"></div>
            <div v-if="outAndInDoku" class="textalign">{{ this.$store.state.documentaryList.length }}</div>
            <div v-else class="textalign biggerline"> - </div>
        </div>
        <div class="pcbarone">
            <div id="musicBar" class="barsinprogram boxprogram three floatleft"></div>
            <div v-if="outAndInMusic" class="textalign">{{ this.$store.state.musicList.length }}</div>
            <div v-else class="textalign biggerline"> - </div> 
        </div>
        <div class="pcbarone">
            <div id="sportBar" class="barsinprogram boxprogram three floatleft"></div>
            <div v-if="outAndInSport" class="textalign">{{ this.$store.state.sportList.length }}</div>
            <div v-else class="textalign biggerline"> - </div>
        </div>
          <div class="pcbarone">
            <div id="humourBar" class="barsinprogram boxprogram three floatleft"></div>
            <div v-if="outAndInHumour" class="textalign">{{ this.$store.state.humourList.length }}</div>
            <div v-else class="textalign biggerline"> - </div>
            
        </div>
      </div>
            </div>
    <div class="boxwithprograms">
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
    <div class="buttonforalfabethic">
        <input type="checkbox" id="buttonalfabetisk" class="btn" @click="sortAlphabetically('alphabetically', true)">
        <label for="buttonalfabetisk" class="textforcheckbox goupabit">Bokstavsordning</label>
    </div>

    <div class="straightline"></div>
      
    </div>
            
        
        

</section> 
</template>

<script>
export default{
    data(){
      return{
        sortedAlphaList: [],
        sorted: false,
        outAndInDoku: false,
        outAndInMusic: false,
        outAndInSport: false,
        outAndInHumour: false,
      }
    },
    methods:{
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
                document.getElementById(barId).style.width = "50vh";
              }else{
                document.getElementById(barId).style.width = (value.length/2.5)+"vh";
              }
              
            } else {
              document.getElementById(barId).style.width = "1vh";
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

    }
}
</script>

<style>
    .layoutinprogram{
        display: flex;
        width: 70vw;
        margin-top: -20vh;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .straightline{
        width: 50vw;
        height: 2vw;
        border-bottom: 0.1vw solid black;
        position: absolute;
        top: 55vh;
        opacity: 0.6;
    }
    .buttonforalfabethic{
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        right: -10vw;
        top: 17vh;
    }
    .pcbarone{
        display: flex;
        flex-direction: row;
    }
    .barsinprogram{
        display: flex;
        justify-content: flex-end;
        height: 4vh;
        width: 2.5vw;
        transition: width 0.6s ease-out;
    }
    .biggerline{
        font-size: 1.3vw;
    }
    .textalign{
        margin-left: 0.5vw;
        font-size: 1.3vw;
    }
    .pcprogrambars{
        display: flex;
        flex-direction: column;
        height: 17.2vw;
        justify-content: space-between;
        position: absolute;
        left: 23vw;
        top: 22 .6vh;
    }
    .buttonsforprogram{
        height: 20vw;
    }
    #buttondocumentary:checked{
        background-color: #C76C5F;
    }
    #buttonalfabetisk:checked{
        background-color: black;
    }
    #buttonmusic:checked{
        background-color: #724B77;
    }
    #buttonsport:checked{
        background-color: #A3C78E;
    }
    #buttonhumour:checked{
        background-color: #7594A8;
    }

    .boxwithprograms{
        position: absolute;
        top: 70vh;
        left: 7vw;
    }
    @media screen and (min-width: 700px){
        
        .boxprogram{
            width: 0.6vw;
            height: 2vw;
            transition-duration: 0.7s;
            transition-property: width;
        }
        .programs{
            width: 51vw;
            height: 14.5vh;
            justify-content: space-around;
            margin-bottom: 3vh;
            margin-left: 0;
            
        }
        .rightlayoutpc{
    
        }
        .programoverflow{
            overflow-y: auto;
            position: relative;
        }
    }
</style>