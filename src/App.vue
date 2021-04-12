<template>
    <router-view />
</template>

<script>
export default {
    // mutates store to add api objects to lists when mounted
    mounted() {
        this.$store.commit("creatingTrafficLists")
        this.$store.commit("creatingProgramLists")
        this.$store.commit("creatingStorningLists")
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
/* Global settings */

:root {
    --orange: #c76c5f;
    --purple: #724b77;
    --green: #a3c78e;
    --red: #cf3746;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    color: #1a1a1a;
}

body {
    overflow-x: hidden;
}

p {
    font-size: 4vw;
}

a {
    text-decoration: none;
}

.green {
    background-color: var(--green);
}

.purple {
    background-color: var(--purple);
}

.orange {
    background-color: var(--orange);
}

.red {
    background-color: var(--red);
}

.pagelayout {
    height: 100vh;
    background-color: rgb(240, 240, 240);
}

.removelogomobile {
    display: none;
}

.header {
    position: sticky;
    background-color: white;
    top: 0;
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 550;
}

.logotypesize {
    width: 34vw;
    padding-top: 1vh;
}

#scroller {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
}

#scroller section {
    scroll-snap-align: start;
}

.btn {
    -moz-default-apperance: none;
    -o-appearance: none;
    -webkit-appearance: none;
    width: 14vw;
    height: 7.6vh;
    background-color: white;
    margin-left: 9vw;
    border-radius: 20%;
    border: 1vw solid rgba(100, 100, 100, 0.6);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.5vw 1vw 0.11vw rgba(1, 1, 1, 0.9);
}

#linkdecoration {
    text-decoration: underline;
    color: rgb(40, 62, 255);
    font-size: 4vw;
}

.invisiblebackground {
    background-color: transparent;
    border: none;
}

.enableborderbottom {
    border-bottom: 1vw solid black;
}

.infobutton {
    position: absolute;
    width: 9.6vw;
    right: 9vw;
    top: 2.5vh;
}

.showinfomessage {
    position: relative;
    width: 80vw;
    height: unset;
    top: 4vh;
    left: 10vw;
    font-size: 4vw;
    padding: 5vh;
    border-radius: 5vw;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.3) 0 2vw 4vw 1vw;
    z-index: 999;
}

.blurredbackground {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 10vh;
    background-color: rgba(1, 1, 1, 0.4);
    visibility: hidden;
}

#buttonInfo1:focus + #infomessage1 {
    visibility: visible;
}
#buttonInfo2:focus + #infomessage2 {
    visibility: visible;
}
#buttonInfo3:focus + #infomessage3 {
    visibility: visible;
}

#buttonInfo1:focus + #scroller {
    filter: blur(3px);
}

.closeinfo {
    position: absolute;
    width: 10vw;
    top: 2vh;
    right: 1vh;
}

/*Starting Page*/
#mainpage {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#mainpage > span {
    text-align: center;
}

.barsonmainpage {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 30vw;
    height: 20vh;
    margin-top: 10vh;
}

.bars {
    width: 8vw;
}

.bar1 {
    height: 12vh;
}

.bar2 {
    height: 16vh;
}

.bar3 {
    height: 20vh;
}

#topspan {
    width: 80vw;
    margin-top: 14vh;
    color: rgb(53, 53, 53);
    font-size: 6vw;
}
.makeintrobold {
    font-weight: 1000;
    font-size: 6vw;
}
#bottomspan {
    margin-top: 16vh;
}
#marginfromtopspan {
    margin-top: 6vh;
    font-size: 4.5vw;
}

#mainpageimg {
    width: 8vw;
    margin-top: 1vh;
}

/*Hamburger Menu (Side menu)*/
.hamburgerdisplay {
    position: fixed;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    height: 100vh;
    width: 78vw;
    z-index: 1000;
    filter: blur(0);
    transition: all 0.5s ease-in-out;
}

#showmenu {
    left: -100vw;
}

#clickawayfromburger {
    position: fixed;
    width: 22vw;
    height: 100vh;
    right: -30vw;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    z-index: 10;
}

.hiddenheader {
    margin-top: -4vh;
    width: 80vw;
    height: 10vh;
    font-size: 3.3vw;
}

.alternativesinsidemenu {
    margin-bottom: 60vh;
    margin-left: 6vw;
    height: 22vh;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 5.5vw;
}

#hiddenblockinburger {
    position: absolute;
    left: 6vw;
    top: 52%;
    visibility: hidden;
    width: 52vw;
    border-top: 0.7vw dotted black;
    font-size: 4vw;
}

#arrowswitchimg {
    position: absolute;
    right: 12vw;
    top: 48.6vh;
    width: 4vw;
    transform: rotate(180deg);
    transition: transform 0.3s;
}

#newwindowimage {
    width: 3.5vw;
    margin-left: 1vw;
}

.titlemoreinfo {
    position: absolute;
    top: 47.8%;
    left: 6vw;
}

.omoss {
    position: absolute;
    list-style-type: none;
    bottom: 4vh;
    left: 6vw;
    font-size: 4.5vw;
}

span > h3 {
    letter-spacing: 0.3vw;
}

.item {
    position: absolute;
    width: 12vw;
    height: 5vh;
    z-index: 1001;
    border-radius: 3vw;
    top: 2.5vh;
    left: 8vw;
}

.menuLine {
    position: absolute;
    height: 0.6vh;
    width: 8vw;
    background: black;
    border-radius: 4vw;
    transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
    z-index: 10;
}

.menuLine1 {
    top: 19%;
}

.menuLine2 {
    top: 49%;
}

.menuLine3 {
    top: 79%;
}

.menu.close .menuLine1 {
    transform: rotate(45deg);
    top: 49%;
}

.menu.close .menuLine2,
.menu.close .menuLine3 {
    transform: rotate(-45deg);
    top: 49%;
}

/*Om Oss Sidan*/
.pagelayoutaboutus {
    background-color: rgb(240, 240, 240);
    height: unset;
    width: 100vw;
}

.aboutusheader {
    position: fixed;
    top: 4vh;
    height: 10vh;
}

.picturesaboutus {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 2vw;
    column-gap: 6vw;
    justify-content: center;
}

.profilepictures {
    width: 36vw;
    height: 20vh;
    border-radius: 50%;
}

.invisiblebackground {
    background-color: transparent;
    border: none;
}

.name1 {
    width: 44vw;
    text-align: center;
    margin-right: -8vw;
}
.name2 {
    width: 44vw;
    text-align: center;
}

.textaboutus {
    padding: 4vh;
    text-align: center;
}

.profilepicture {
    width: 33.5vw;
    height: 18.7vh;
    border-radius: 50%;
}

.profiletitles {
    width: 35vw;
    text-align: center;
    border-bottom: 1vw solid black;
    font-weight: bold;
}

.profiletitlespc {
    display: none;
}

/*Trafikstatistik sida*/
#layoutinaccidents {
    display: flex;
    height: 86vh;
    margin-top: 1vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.barsoncrashes {
    width: 80vw;
    height: 80vh;
}

.trafikstatistik {
    width: inherit;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -10vw;
    overflow-y: hidden;
}

.barsintrafik {
    display: flex;
    justify-content: flex-end;
    height: 4vh;
    width: 2.5vw;
    transition: width 0.6s ease-out;
}

.buttoncontainer {
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    margin-top: -1vh;
}

.buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 86vw;
    margin-right: 6vw;
}
.buttonsforprograms {
    width: 100vw;
    margin-right: 0;
}

.amountinbars {
    height: 4vh;
    width: 4vw;
    margin-left: 2vw;
    background-color: rgb(240, 240, 240);
}

.btn:focus {
    outline: none;
}

.btn:checked {
    border: none;
    box-shadow: none;
}

.btn:checked::after {
    content: "";
    background-image: url("assets/checkmark.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: inline-block;
    height: 7vh;
    width: 8vw;
    margin-left: 2.8vw;
    margin-top: 0.3vh;
}

#malmo:checked {
    background-color: var(--green);
}

#goteborg:checked {
    background-color: var(--orange);
}

#stockholm:checked {
    background-color: var(--purple);
}

.textforcheckbox {
    position: relative;
    font-size: 5.5vw;
    bottom: 3vh;
    left: 1vw;
    text-align: left;
}

.marginfrombars {
    padding-left: 5vw;
}

.leftdescription {
    display: none;
}

.navbarforpc {
    display: none;
}

.omosspc {
    display: none;
}

.textundershapes {
    display: none;
}

.mainpcshapes {
    display: none;
}

.navbartext {
    font-size: 1vw;
}

.picturesaboutuspc {
    display: none;
}

.namesaboutuspc {
    display: none;
}

/*FOR PC AND BIGGER SCREENS ONLY*/
@media screen and (min-width: 700px) {
    /*GLOBAL FOR PC*/
    .pagelayout {
        overflow-y: hidden;
        overflow-x: hidden;
    }
    .leftdescription {
        border-left: 0.5vw solid #6b9eb8;
        padding-left: 1vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 17vw;
        margin-top: 21vh;
        margin-left: 5vw;
    }

    .leftdescription p {
        font-size: 1vw;
        text-align: left;
    }

    .logotypesize {
        width: 8vw;
        padding-top: 0.5vh;
    }

    .removelogomobile {
        display: block;
    }

    .boldonwhatpage {
        font-weight: bold;
        font-size: 1vw;
    }

    .rightlayoutpc {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 84vh;
        width: 67vw;
        border-left: 0.25vw dotted black;
        margin-left: 30vw;
        margin-top: -42vh;
        overflow-x: hidden;
    }

    .fornotindexpages {
        margin-top: -30vh;
    }

    .logonotindexpage {
        margin-bottom: 1.4vh;
        height: 2.4vh;
    }

    .titlepc {
        font-size: 1.5vw;
        text-align: left;
    }

    .header {
        height: 8vh;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        padding: 0 2vw;
    }

    .navbarforpc {
        display: block;
    }

    .navbarhover:hover {
        border-bottom: 0.1vw solid black;
    }

    .omosspc {
        display: block;
    }

    #mainpage {
        display: block;
    }

    .mainpcshapes {
        display: block;
    }

    .normalflex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #linkdecoration {
        font-size: 1vw;
    }
    /*MAIN PAGE*/
    .mainpcshapes {
        width: 20vw;
        height: 10vh;
        text-align: center;
    }

    .textundershapes {
        display: block;
        margin-top: -38vh;
        margin-right: 1vw;
        font-size: 1vw;
    }

    #leftspanpc {
        height: 26vh;
    }

    .leftspan2pc {
        height: 14vh;
    }

    .navbarforpc ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 25vw;
        font-size: 0.9vw;
    }

    .layingbars {
        transform: rotate(90deg);
        margin-top: 4.4vh;
    }

    .bar1 {
        height: 10vh;
    }

    .bar2 {
        width: 2vw;
    }

    .bar3 {
        height: 22vh;
    }

    .bars {
        width: 2vw;
    }

    .barsonmainpagepc {
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        width: 8vw;
        height: 20vh;
        margin-left: 6vw;
    }
    .circlebox {
        margin-top: 1vh;
        width: 3vw;
        height: 6vh;
        border-radius: 5vw;
    }
    /*OM OSS PAGE PC*/
    .pagelayoutaboutus {
        height: 100vh;
    }

    .rightlayoutaboutuspc {
        position: relative;
        bottom: 15vh;
        left: 30vw;
        padding-left: 20vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 84vh;
        width: 50vw;
        border-left: 0.25vw dotted black;
    }

    .pictureswithtext1 {
        position: relative;
        top: 2vh;
    }

    .pictureswithtext2 {
        position: relative;
        bottom: 14vh;
    }

    .picturesaboutuspc {
        width: 40vw;
        height: 20vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .namesaboutuspc {
        width: 40vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .profilepictures {
        width: 9.5vw;
        height: 18.85vh;
        border-radius: 50%;
    }

    .name {
        width: 10vw;
        text-align: center;
    }

    .invisiblebackground {
        background-color: transparent;
        border: none;
    }

    .textaboutus {
        text-align: left;
    }

    .profilepicture {
        width: 9vw;
        height: 18vh;
        border-radius: 50%;
    }

    .profiletitlespc {
        display: block;
        width: 10vw;
        height: 1vh;
        text-align: center;
        border: none;
        font-weight: bold;
        position: relative;
        top: 12vh;
        right: 7vw;
        transform: rotate(-90deg);
    }

    .yrgologo {
        width: 8vw;
    }

    .teamname {
        letter-spacing: 0;
        padding-top: 1vh;
        font-size: 1vw;
    }

    .titleaboutuspc {
        width: 5.6vw;
        font-size: 1.5vw;
        text-align: left;
    }

    /*SECOND PAGE PC*/
    #layoutinaccidents {
        display: flex;
        width: 50vw;
        margin-right: 20vw;
        margin-top: -20vh;
        flex-direction: row;
        align-items: center;
    }

    .layoutinhandelser {
        display: flex;
        width: 70vw;
        margin-top: -20vh;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    .barsoncrashes {
        width: 30vw;
        height: 20vh;
        margin-top: -50vh;
        margin-left: -60vw;
        transform: rotate(-90deg);
        z-index: 999;
    }

    .trafikstatistik {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 20vh;
        width: 20vw;
        border-bottom: none;
    }

    .barsintrafik {
        height: 4vh;
        width: 1.17vw;
        align-items: center;
        justify-content: flex-end;
    }

    .rotatenormal {
        transform: rotate(90deg);
    }

    .amountinbars {
        width: 3vw;
        height: 2vh;
        text-align: center;
        transform: rotate(90deg);
        margin-right: -3vh;
    }

    .buttoncontainer {
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        width: 12vw;
        justify-content: flex-start;
        height: 20vh;
    }

    .btn {
        width: 2vw;
        height: 4vh;
        background-color: white;
        border: 0.3vw solid rgba(100, 100, 100, 0.6);
        box-shadow: none;
        cursor: pointer;
    }

    .btn:hover {
        background-color: rgb(206, 206, 206);
    }

    .btn:checked::after {
        width: 1.3vw;
        margin-left: 0.3vw;
        margin-top: -1.5vh;
    }

    .textforcheckbox {
        font-size: 1vw;
        font-weight: bold;
        margin-top: 0;
        margin-right: 10vw;
        cursor: pointer;
        text-align: left;
        position: relative;
        left: -5vw;
        bottom: 0;
    }

    .layunder {
        width: 8vw;
        position: absolute;
        margin-top: 10vh;
        margin-left: -16vw;
        display: flex;
        align-items: baseline;
        justify-content: center;
    }

    .bordertop {
        border-top: 0.1vw solid black;
    }

    .measureinbars {
        height: 7vw;
        border-bottom: 0.1vw solid black;
    }

    /*MOBILE ITEMS*/
    .item {
        display: none;
    }

    #bottomspan {
        display: none;
    }

    #topspan {
        display: none;
    }

    #marginfromtopspan {
        display: none;
    }

    .barsonmainpage {
        display: none;
    }

    #mainpageimg {
        display: none;
    }

    #clickawayfromburger {
        display: none;
    }

    .titlesmobile {
        display: none;
    }

    .linkinfobuttons {
        display: none;
    }

    .displaypage {
        display: block;
    }

    #trafikstatistik {
        display: none;
    }

    #trafikhändelser {
        display: none;
    }

    .textaboutus {
        display: none;
    }

    .picturesaboutus {
        display: none;
    }

    #program {
        display: none;
    }
}
</style>
