export default {
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
            outAndInGoteborg: false,
            outAndInMalmo: false,
            outAndInSthlm: false,
        }
    },
    mounted(){
        this.test()
    },
    methods: {
        async fetching(url){
            let response = await fetch(url)
            let json = await response.json()
            return json
        },

        async test() {
            let json = await this.fetching("http://api.sr.se/api/v2/traffic/messages?format=json")

            for(let i = 1; i<=json.pagination.totalpages; i++)
            {
                let jsonmessage = await this.fetching("http://api.sr.se/api/v2/traffic/messages?format=json&page=" + i)
                for(let message of jsonmessage.messages)
                {
                    let latitude = message.latitude
                    let longitude = message.longitude
                    if(message.category === 0)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Göteborg")
                            {
                                this.goteborgRoad.push(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Malmöhus")
                            {
                                this.malmoRoad.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Stockholm")
                            {
                                this.sthlmRoad.push(message)
                            }
                        }
                        
                    }
                    else if(message.category === 1)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Göteborg")
                            {
                                this.goteborgKollektiv.push(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Malmöhus")
                            {
                                this.malmoKollektiv.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Stockholm")
                            {
                                this.sthlmKollektiv.push(message)
                            }
                        }
                        
                    }
                    else if(message.category === 3)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Göteborg")
                            {
                                this.goteborgOvrigt.push(message)
                            }   
                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Malmöhus")
                            {
                                this.malmoOvrigt.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let location = await this.fetching("http://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            if(location.area.name === "Stockholm")
                            {
                                this.sthlmOvrigt.push(message)
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
        }


    }
}

