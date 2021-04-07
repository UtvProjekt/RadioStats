<template>
  <div class="item menu" v-bind:class="{close: menuClose}" @click="toggleMenuIcon">
                <div class="menuLine menuLine1"></div>
                <div class="menuLine menuLine2"></div>
                <div class="menuLine menuLine3"></div>
            </div>
            
            
            <div class="display" id="showmenu">
                
                <div class="header hiddenheader aboutusheader"><h1>RadioStats</h1></div>
    
                <ul class="alternatives">
                    <li><router-link to="/">Home Page</router-link></li>
                </ul>
                
                <ul class="omoss">
                    <li>Lyssna på Radio</li>
                </ul>
                
            </div>
            <div id="clickawayfromburger" @click="toggleMenuIcon(false, 'noid')"></div>
      
        
        <!--MAIN ABOUT US PAGE-->
        <div id="scroller">

            <div class="pagelayoutaboutus">

                <div class="header"><router-link to="/"><img src="../assets/logotype.svg" alt="logotype" class="logotypesize"></router-link>
                <nav class="navbarforpc">
                    <ul class="removelistdecoration">
                        <li><router-link to="/trafikstatistik" class="navbarhover">Trafikstatistik</router-link></li>
                        <li ><router-link to="/trafikhandelser" class="navbarhover">Trafikhändelser</router-link></li>
                        <li ><router-link to="/program" class="navbarhover">Program</router-link></li>
                    </ul>
                </nav>
                <router-link to="/omoss" class="omosspc navbarhover">
                    <strong>Om Oss</strong>
                </router-link>
            </div>
            <!--MOBILE LAYOUT-->
                <div class="textaboutus">
                    <h2>Hej</h2>
                    <h3>Vi är skaparna av RadioStats!</h3>
                    <p>
                        <br>Utifrån Sveriges Radios <a href="https://sverigesradio.se/api/documentation/v2/index.html" id="linkdecoration">API</a> har vi skapat datavisualiseringarna.
                    </p>

                </div>  

                <div class="picturesaboutus">
                    <div class="profiletitles"><h3>UX</h3></div>
                    <div class="profiletitles"><h3>Utvecklare</h3></div>
                    <div class="pictures"><img src="../assets/profilepicturemalin.png" alt="profilepicture" class="profilepicture"></div>
                    <div class="pictures"><img src="../assets/profilepictureanton.jpg" alt="profilepicture" class="profilepicture"></div>
                    <div class="name1">Malin Bjelle</div>
                    <div class="name2">Anton Ewards</div>
                    <div class="pictures"><img src="../assets/profilepictureoliwer.jpg" alt="profilepicture" class="profilepicture"></div>
                    <div class="pictures"><img src="../assets/profilepictureoscar.jpg" alt="profilepicture" class="profilepicture"></div>
                    <div class="name1">Oliwer Hägglund</div>
                    <div class="name2">Oscar Jonasson</div>
                    <div class="pictures"><img src="../assets/profilepicturefadi.jpg" alt="profilepicture" class="profilepicture"></div>
                    <div class="pictures"><img src="../assets/profilepicturesebastian.jpg" alt="profilepicture" class="profilepicture"></div>
                    <div class="name1">Fadi Tobela</div>
                    <div class="name2">Sebastian Petersson</div>
                    <div class="pictures"><img src="../assets/profilepicturejulias.png" alt="profilepicture" class="profilepicture"></div>
                    <div class="pictures invisiblebackground"></div>
                    <div class="name1">Julia Palstam</div>
                    <div class="name2"></div>
                </div>    
                <!--PC LAYOUT-->
                <span class="leftdescription">
                    <h1 class="titleaboutuspc">Om Oss</h1>
                    
                    <h3 class="teamname">Team BabyBlue</h3>
                    <p>
                        <br>Utifrån Sveriges Radios <a href="https://sverigesradio.se/api/documentation/v2/index.html" id="linkdecoration">API</a> har vi skapat datavisualiseringarna.
                    </p>
                    <img src="../assets/yrgologo.png" alt="yrgologo" class="yrgologo">
                </span>
                <div class="notindexpages rightlayoutaboutuspc">
                    <div class="pictureswithtext1">
                        <div class="profiletitlespc"><h3>UX Designers</h3></div>
                        <div class="picturesaboutuspc">
                            <div class="pictures"><img src="../assets/profilepicturemalin.png" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures"><img src="../assets/profilepictureoliwer.jpg" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures"><img src="../assets/profilepicturefadi.jpg" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures"><img src="../assets/profilepicturejulias.png" alt="profilepicture" class="profilepicture"></div>
                        </div>
                        <div class="namesaboutuspc">
                            <div class="name">Malin Bjelle</div>
                            <div class="name">Oliwer Hägglund</div>
                            <div class="name">Fadi Tobela</div>
                            <div class="name">Julia Palstam</div>
                        </div>
                    </div>
                    <div class="pictureswithtext2">
                        <div class="profiletitlespc"><h3>Utvecklare</h3></div>
                        <div class="picturesaboutuspc">
                            <div class="pictures"><img src="../assets/profilepictureanton.jpg" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures"><img src="../assets/profilepictureoscar.jpg" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures"><img src="../assets/profilepicturesebastian.jpg" alt="profilepicture" class="profilepicture"></div>
                            <div class="pictures invisiblebackground"></div>
                        </div>
                        <div class="namesaboutuspc">
                            <div class="name">Anton Ewards</div>
                            <div class="name">Oscar Jonasson</div>
                            <div class="name">Sebastian Petersson</div>
                            <div class="name invisiblebackground"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          
</template>

<script>

export default {
data() {

    return{
        menuClose: false,
      moreInfo: false,
  
    }
},

methods: {
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

}

}

</script>