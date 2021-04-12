import { createStore } from "vuex";

export default createStore({
    state() {
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
            documentaryList: [],
            humourList: [],
            sportList: [],
            musicList: [],
            norrRoad: [],
            norrKollektiv: [],
            norrOvrigt: [],
            norrList: [],
            eastRoad: [],
            eastKollektiv: [],
            eastOvrigt: [],
            eastList: [],
            westRoad: [],
            westKollektiv: [],
            westOvrigt: [],
            westList: [],
            centrumRoad: [],
            centrumKollektiv: [],
            centrumOvrigt: [],
            centrumList: [],

            
        }
    },
    mutations: {
        // Fetches traffic messages and places them in lists depending on coordinates and the area name
        async creatingStorningLists(state){
            let response = await fetch("https://api.sr.se/api/v2/traffic/messages?format=json")
            let json = await response.json()
            for(let i = 1; i<=json.pagination.totalpages; i++)
            {
                let jsonmessage = await fetch("https://api.sr.se/api/v2/traffic/messages?format=json&page=" + i)
                let listofmessage = await jsonmessage.json()
                for(let message of listofmessage.messages)
                {
                    let location = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + message.latitude + "&longitude="+message.longitude)
                    let areas = await location.json()
                    
                    if(areas.area.name === 'Göteborg'){
                        if(message.category === 0){
                            //Innanför centrum
                            if(message.latitude < 57.720836 && message.longitude < 11.998376 && message.latitude > 57.689671 && message.longitude > 11.968479){
                                state.centrumRoad.push(message)
                                state.centrumList.push(message)
                            } //Västra göteborg
                            else if(message.latitude < 57.691538 && message.longitude < 11.999229)
                            {
                                state.westRoad.push(message)
                                state.westList.push(message)
                            }  //Norra göteborg (hisingen)
                            else if(message.latitude > 57.691538 && message.longitude < 11.999229 && message.latitude < 57.859731){
                                state.norrRoad.push(message)
                                state.norrList.push(message)
                            }  //Östra göteborg
                            else if(message.latitude > 57.700992 && message.longitude > 11.999299 && message.latitude < 57.859731 && message.longitude < 12.195997){
                                state.eastRoad.push(message)
                                state.eastList.push(message)
                            }
                        }
                        else if(message.category === 1){
                            if(message.latitude < 57.720836 && message.longitude < 11.998376 && message.latitude > 57.689671 && message.longitude > 11.968479){
                                state.centrumKollektiv.push(message)
                                state.centrumList.push(message)
                            }
                            else if(message.latitude < 57.691538 && message.longitude < 11.999229)
                            {
                                state.westKollektiv.push(message)
                                state.westList.push(message)
                            }
                            else if(message.latitude > 57.691538 && message.longitude < 11.999229 && message.latitude < 57.859731){
                                state.norrKollektiv.push(message)
                                state.norrList.push(message)
                            }
                            else if(message.latitude > 57.700992 && message.longitude > 11.999299 && message.latitude < 57.859731 && message.longitude < 12.195997){
                                state.eastKollektiv.push(message)
                                state.eastList.push(message)
                            }
                        }
                        else if(message.category === 3){
                            if(message.latitude < 57.720836 && message.longitude < 11.998376 && message.latitude > 57.689671 && message.longitude > 11.968479){
                                state.centrumOvrigt.push(message)
                                state.centrumList.push(message)
                            }
                            else if(message.latitude < 57.691538 && message.longitude < 11.999229)
                            {
                                state.westOvrigt.push(message)
                                state.westList.push(message)
                            }
                            else if(message.latitude > 57.691538 && message.longitude < 11.999229 && message.latitude < 57.859731){
                                state.norrOvrigt.push(message )
                                state.norrList.push(message)
                            }
                            else if(message.latitude > 57.700992 && message.longitude > 11.999299 && message.latitude < 57.859731 && message.longitude < 12.195997){
                                state.eastOvrigt.push(message)
                                state.eastList.push(message)
                            }
                        }
                    }
                    
                    
                }
            }

        },
        // Fetches traffic messages and places them in lists depending on coordinates and area names
        async creatingTrafficLists(state){
            let jsonall = await fetch("https://api.sr.se/api/v2/traffic/messages?format=json")
            let jsonpages = await jsonall.json()
            for(let i = 1; i<=jsonpages.pagination.totalpages; i++)
            {
                let messages = await fetch("https://api.sr.se/api/v2/traffic/messages?format=json&page=" + i)
                let jsonmessage = await messages.json()
                for(let message of jsonmessage.messages)
                {
                    let latitude = message.latitude
                    let longitude = message.longitude
                    if(message.category === 0)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Göteborg")
                            {
                                state.goteborgRoad.push(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Malmöhus")
                            {
                                state.malmoRoad.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Stockholm")
                            {
                                state.sthlmRoad.push(message)
                            }
                        }
                        
                    }
                    else if(message.category === 1)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Göteborg")
                            {
                                state.goteborgKollektiv.push(message)
                            }

                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Malmöhus")
                            {
                                state.malmoKollektiv.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Stockholm")
                            {
                                state.sthlmKollektiv.push(message)
                            }
                        }
                        
                    }
                    else if(message.category === 3)
                    {
                        if(message.latitude < 57.973157 && message.longitude > 11.497966 && message.latitude > 57.581553 && message.longitude < 12.287186){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Göteborg")
                            {
                                state.goteborgOvrigt.push(message)
                            }   
                        }
                        else if(message.latitude < 55.700188 && message.longitude > 12.855355 && message.latitude > 55.503128 && message.longitude < 13.212649){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Malmöhus")
                            {
                                state.malmoOvrigt.push(message)
                            }
                        }
                        else if(message.latitude < 59.494188 && message.longitude > 17.541020 && message.latitude > 58.937539 && message.longitude < 18.783304){
                            let response = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&latitude=" + latitude + "&longitude=" + longitude)
                            let location = await response.json()
                            if(location.area.name === "Stockholm")
                            {
                                state.sthlmOvrigt.push(message)
                            }
                        }
                    }
                }
            }
        

        },
        // Fetches programs and places them in lists depending on category
        async creatingProgramLists(state){
            let categories = [82, 133, 10, 5]
            for(let category of categories){
                let pages = await fetch("https://api.sr.se/api/v2/programs/index?format=json&programcategoryid=" + category)
                let nrOfPages = await pages.json()
                for(let i = 1; i<=nrOfPages.pagination.totalpages; i++){
                    let message = await fetch("https://api.sr.se/api/v2/programs/index?format=json&programcategoryid=" + category + "&page=" + i)
                    let jsonmessage = await message.json()
                
                    if(category === 82){
                        for(let program of jsonmessage.programs){
                            state.documentaryList.push(program)
                        }
                    }
                    if(category === 133){
                        for(let program of jsonmessage.programs){
                            state.humourList.push(program)
                        }
                    }
                    if(category === 10){
                        for(let program of jsonmessage.programs){
                            state.sportList.push(program)
                        }
                    }
                    if(category === 5){
                        for(let program of jsonmessage.programs){
                            state.musicList.push(program)
                        }
                    }
                }
            }

        }
    
    },

  
 
})
