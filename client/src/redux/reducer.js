
const initialState = {
    recetasFiltradas: [],
    allRecetas: [],
    //dietasTypes: [],
    //recetasDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECETAS": return {
            ...state,
            recetasFiltradas: action.payload,
            allRecetas: action.payload,
        };


        // case "GET_RECETAS_NAME": return {
            // ...state,
            // recetasAux: action.payload,
            // allRecetas: action.payload,
        // };


        case "GET_RECETA_ID": return {
            ...state,
            recetasDetail: action.payload
        };
        // case "POST_RECETA": return {

        // };


        case "FILTER_BY_DIETS_TYPE": 
            const allRecetas = state.recetasFiltradas
            let dietasAPI = []
            let dietasDB = []
            //const filtroDietas = action.payload === "all" ? allRecetas : allRecetas.filter(r => r.dietas.name === action.payload)
            
            //const filtroDietas = allRecetas.filter(r=>r.dietas?.some(d=>d === action.payload))
           
            allRecetas.forEach(e => {
                if (e.hasOwnProperty("dietas") && e.dietas.includes(action.payload)) {
                        dietasAPI.push(e)
                    }  
                });
            allRecetas.forEach(e => { 
                if (e.hasOwnProperty("dietas") && e.dietas.find(c => c.name === action.payload)) {
                    dietasDB.push(e)
                    }
                });
            const filtroDietas = dietasAPI.concat(dietasDB)
            //console.log(filtroDietas)
            return {
                ...state,
                allRecetas: action.payload === "ALL" ? allRecetas : filtroDietas
            };


        case "CREADOS_DB": 
            const allRecetas2 = state.recetasFiltradas
            const creadosDB = action.payload === "DB" ? allRecetas2.filter(r => r.creadoDB) : allRecetas2.filter(r => !r.creadoDB)
            return {
                ...state,
                allRecetas: action.payload === "all" ? allRecetas2 : creadosDB
            };


        case "ORDER_BY_ALFABETO":
            let allRecetas3 = action.payload === "AZ" ?
                state.allRecetas.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1
                    }
                    return 0
                })
                : state.allRecetas.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                allRecetas: allRecetas3
            };


        // case "ORDER_BY_PUNTAJE": return {

        // };

        
       default: return {...state};
    };
};

export default rootReducer;

