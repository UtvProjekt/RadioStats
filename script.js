const app = {
        data() {
            return{
                menuClose: false,
                moreInfo: false,
                showInfo1: false,
                showInfo2: false,
                showInfo3: false,
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
            toggleMenuIcon(){
                
                if(!this.menuClose){
                    this.openSideMenu()
                }
                else{
                    this.closeSideMenu()
                }

                this.menuClose = !this.menuClose
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
Vue.createApp(app).mount("#app")