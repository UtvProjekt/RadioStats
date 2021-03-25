const app = {
    data() {
        return {
            goteborgRoad: [],
            goteborgKollektiv: [],
            goteborgOvrigt: [],
            malmoRoad: [],
            malmoKollektiv: [],
            malmoOvrigt: [],
            sthlmRoad: [],
            sthlmKollektiv: [],
            sthlmOvrigt: [],
            kalmarRoad: [],
            kalmarKollektiv: [],
            kalmarOvrigt: [],
            outAndInGoteborg: false,
            outAndInMalmo: false,
            outAndInKalmar: false,
            outAndInSthlm: false,
        }
    },
    mounted(){
        this.test()
    },
    methods: {
        async fetching(url){
            response = await fetch(url)
            let json = await response.json()
            return json
        },

        async test() {
            let json = await this.fetching("http://api.sr.se/api/v2/traffic/messages?format=json")

            for(let i = 1; i<=json.pagination.totalpages; i++)
            {
                let jsonmessage = await this.fetching("http://api.sr.se/api/v2/traffic/messages?format=json&page=" + i)
                for(message of jsonmessage.messages)
                {
                    let latitude = message.latitude
                    let longitude = message.longitude
                    if(message.category === 0)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Göteborg")
                            {
                                this.goteborgRoad.push(message)
                                console.log(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Malmöhus")
                            {
                                this.malmoRoad.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Stockholm")
                            {
                                this.sthlmRoad.push(message)
                            }
                        }
                        else if(message.latitude < 56.760101 && message.longitude > 16.168582 && message.latitude > 56.586868 && message.longitude < 16.405230){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Kalmar")
                            {
                                this.kalmarRoad.push(message)
                            }
                        }
                    }
                    else if(message.category === 1)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Göteborg")
                            {
                                this.goteborgKollektiv.push(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Malmöhus")
                            {
                                this.malmoKollektiv.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Stockholm")
                            {
                                this.sthlmKollektiv.push(message)
                            }
                        }
                        else if(message.latitude < 56.760101 && message.longitude > 16.168582 && message.latitude > 56.586868 && message.longitude < 16.405230){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Kalmar")
                            {
                                this.kalmarKollektiv.push(message)
                            }
                        }
                    }
                    else if(message.category === 3)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Göteborg")
                            {
                                this.goteborgOvrigt.push(message)
                            }   
                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Malmöhus")
                            {
                                this.malmoOvrigt.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Stockholm")
                            {
                                this.sthlmOvrigt.push(message)
                            }
                        }
                        else if(message.latitude < 56.760101 && message.longitude > 16.168582 && message.latitude > 56.586868 && message.longitude < 16.405230){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name = "Kalmar")
                            {
                                this.kalmarOvrigt.push(message)
                            }
                        }
                    }
                }
            }
            
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
            else if(ide1==='kalmarroad')
            {
                this.checkStatus(type1, type2, type3, ide1, ide2, ide3, this.outAndInKalmar)
                this.outAndInKalmar = !this.outAndInKalmar
            }
            
        },
        
        checkStatus(type1, type2, type3, ide1, ide2, ide3, outAndIn){
            let ide = [ide1, ide2, ide3]
            let type = [type1, type2, type3]
            if(!outAndIn){

                for(let i = 0; i<3; i++){
                    document.getElementById(ide[i]).style.width = 5+(5*(type[i]).length)+"vw"
                }

            }else{
                for(let i = 0; i<3; i++){  
                    document.getElementById(ide[i]).style.width = "0"
                }

            }
        }


    }
}
    
    


Vue.createApp(app).mount("#app")