<template>
    <div class="item menu" v-bind:class="{ close: menuClose }" @click="toggleMenuIcon(false, 'noid')">
        <div class="menuLine menuLine1"></div>
        <div class="menuLine menuLine2"></div>
        <div class="menuLine menuLine3"></div>
    </div>
    <div class="hamburgerdisplay" id="showmenu">
        <div class="header hiddenheader aboutusheader">
            <img src="../assets/logotype.svg" alt="logoradiostats" class="logotypesize" />
        </div>
        <ul class="alternativesinsidemenu">
            <li><router-link to="/">Hem</router-link></li>
        </ul>
    </div>
    <div id="clickawayfromburger" @click="toggleMenuIcon(false, 'noid')"></div>
    <!--MAIN ABOUT US PAGE-->
    <div id="scroller">
        <div class="pagelayoutaboutus">
            <div class="header">
                <router-link to="/"
                    ><img src="../assets/logotype.svg" alt="logotype" class="logotypesize"
                /></router-link>
                <nav class="navbarforpc">
                    <ul class="removelistdecoration">
                        <li class="navbartext">
                            <router-link to="/trafikstatistik" class="navbarhover">Trafikstatistik</router-link>
                        </li>
                        <li class="navbartext">
                            <router-link to="/trafikhandelser" class="navbarhover">Trafikstörningar</router-link>
                        </li>
                        <li class="navbartext">
                            <router-link to="/program" class="navbarhover">Radioprogram</router-link>
                        </li>
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
                    <br />Utifrån Sveriges Radios
                    <a
                        href="https://sverigesradio.se/api/documentation/v2/index.html"
                        id="linkdecoration"
                        target="_blank"
                        >API</a
                    >
                    har vi skapat datavisualiseringarna.
                </p>
            </div>

            <div class="picturesaboutus">
                <div class="profiletitles"><h3>UX</h3></div>
                <div class="profiletitles"><h3>Utvecklare</h3></div>
                <div class="profilepictures">
                    <img src="../assets/profilepicturemalin.png" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="profilepictures">
                    <img src="../assets/profilepictureanton.jpg" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="name1">Malin Bjelle</div>
                <div class="name2">Anton Ewards</div>
                <div class="profilepictures">
                    <img src="../assets/profilepictureoliwer.jpg" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="profilepictures">
                    <img src="../assets/profilepictureoscar.jpg" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="name1">Oliwer Hägglund</div>
                <div class="name2">Oscar Jonasson</div>
                <div class="profilepictures">
                    <img src="../assets/profilepicturefadi.jpg" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="profilepictures">
                    <img src="../assets/profilepicturesebastian.jpg" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="name1">Fadi Tobela</div>
                <div class="name2">Sebastian Petersson</div>
                <div class="profilepictures">
                    <img src="../assets/profilepicturejulias.png" alt="profilepicture" class="profilepicture" />
                </div>
                <div class="profilepictures invisiblebackground"></div>
                <div class="name1">Julia Palstam</div>
                <div class="name2"></div>
            </div>
            <!--PC LAYOUT-->
            <span class="leftdescription">
                <h1 class="titleaboutuspc">Om Oss</h1>

                <h3 class="teamname">Team BabyBlue</h3>
                <p>
                    <br />Utifrån Sveriges Radios
                    <a href="https://sverigesradio.se/api/documentation/v2/index.html" id="linkdecoration">API</a> har
                    vi skapat datavisualiseringarna.
                </p>
                <img src="../assets/yrgologo.png" alt="yrgologo" class="yrgologo" />
            </span>
            <div class="fornotindexpages rightlayoutaboutuspc">
                <div class="pictureswithtext1">
                    <div class="profiletitlespc"><h3>UX Designers</h3></div>
                    <div class="picturesaboutuspc">
                        <div class="profilepictures">
                            <img src="../assets/profilepicturemalin.png" alt="profilepicture" class="profilepicture" />
                        </div>
                        <div class="profilepictures">
                            <img src="../assets/profilepictureoliwer.jpg" alt="profilepicture" class="profilepicture" />
                        </div>
                        <div class="profilepictures">
                            <img src="../assets/profilepicturefadi.jpg" alt="profilepicture" class="profilepicture" />
                        </div>
                        <div class="profilepictures">
                            <img src="../assets/profilepicturejulias.png" alt="profilepicture" class="profilepicture" />
                        </div>
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
                        <div class="profilepictures">
                            <img src="../assets/profilepictureanton.jpg" alt="profilepicture" class="profilepicture" />
                        </div>
                        <div class="profilepictures">
                            <img src="../assets/profilepictureoscar.jpg" alt="profilepicture" class="profilepicture" />
                        </div>
                        <div class="profilepictures">
                            <img
                                src="../assets/profilepicturesebastian.jpg"
                                alt="profilepicture"
                                class="profilepicture"
                            />
                        </div>
                        <div class="profilepictures invisiblebackground"></div>
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
        return {
            menuClose: false,
            moreInfo: false,
        }
    },

    methods: {
        // Opens hamburgermenu when called
        openSideMenu() {
            document.getElementById("showmenu").style.left = "0"
            document.getElementById("clickawayfromburger").style.right = "0"
            document.getElementById("scroller").style.filter = "blur(1vw)"
        },
        // Closes hamburgermenu when called
        closeSideMenu() {
            document.getElementById("showmenu").style.left = "-100vw"
            document.getElementById("clickawayfromburger").style.right = "-30vw"
            document.getElementById("scroller").style.filter = "blur(0)"
        },
        // Calls the close or open hamburgermenu methods depending on a boolean that changes each time its called
        toggleMenuIcon(trueorfalse, id) {
            if (!this.menuClose) {
                this.openSideMenu()
            } else {
                this.closeSideMenu()
            }

            this.menuClose = !this.menuClose

            if (trueorfalse) {
                this.scrollToElement(id)
            }
        },
        // Method that scrolls the page to an element
        scrollToElement(id) {
            let element = document.getElementById(id)
            element.scrollIntoView(true)
        },
        // Method that shows a "more info" div when called
        openMoreInfo() {
            document.getElementById("hiddenblockinburger").style.visibility = "visible"
            document.getElementById("arrowswitchimg").style.transform = "rotate(0)"
        },
        // Hides the "more info" div
        closeMoreInfo() {
            document.getElementById("hiddenblockinburger").style.visibility = "hidden"
            document.getElementById("arrowswitchimg").style.transform = "rotate(180deg)"
        },
        // Calls the close or open "more info" methods
        toggleMoreInfo() {
            if (!this.moreInfo) {
                this.openMoreInfo()
            } else {
                this.closeMoreInfo()
            }
            this.moreInfo = !this.moreInfo
        },
    },
}
</script>