
const initialState = {
    recetasFiltradas: [],
    allRecetas: [],
    dietas: [],
    recetasDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECETAS": return {
            ...state,
            recetasFiltradas: action.payload,
            allRecetas: action.payload,
        };


        case "GET_RECETAS_NAME": return {
            ...state,
            allRecetas: action.payload,
        };


        case "GET_RECETA_ID": return {
            ...state,
            recetasDetail: action.payload
        };
        
        case "LIMPIAR": return {
            ...state,
            recetasDetail: []
        }

        case "POST_RECETA": return {
            ...state
        };


        case "GET_DIETAS": return {
            ...state,
            dietas: action.payload
        };

        case "FILTER_BY_DIETS_TYPE": 
            const allRecetas = state.recetasFiltradas
            let dietasAPI = []
            let dietasDB = []
           
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
            console.log(creadosDB)
            return {
                ...state,
                allRecetas: action.payload === "all" ? allRecetas2 : creadosDB
            };


        case "ORDER_BY_ALFABETO":
            const allRecetas3 = state.allRecetas
            if(action.payload === "AZ" ){
                allRecetas3.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1
                    }
                    return 0
                })
            } else if(action.payload === "ZA"){
                allRecetas3.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1
                    }
                    return 0
                })  
            } 
            return {
                ...state,
                allRecetas: allRecetas3
            };


        case "ORDER_BY_PUNTAJE": 
            const allRecetas4 = state.allRecetas
            if(action.payload === "descendente" ){ 
                allRecetas4.sort(function(a, b){
                    if(a.nivelSalud > b.nivelSalud){
                        return 1;
                    }
                    if(b.nivelSalud > a.nivelSalud){
                        return -1
                    }
                    return 0
                })
            } else if(action.payload === "ascendente" ){
                state.allRecetas.sort(function(a, b){
                    if(a.nivelSalud > b.nivelSalud){
                        return -1;
                    }
                    if(b.nivelSalud > a.nivelSalud){
                        return 1
                    }
                    return 0
                })
            }    
            return {
                ...state,
                allRecetas: allRecetas4
            };
        
       default: return {...state};
    };
};

export default rootReducer;

// case "ORDER_BY_ALFABETO":
//             let allRecetas3 = action.payload === "AZ" ?
//                 state.allRecetas.sort(function(a, b){
//                     if(a.name.toLowerCase() > b.name.toLowerCase()){
//                         return 1;
//                     }
//                     if(b.name.toLowerCase() > a.name.toLowerCase()){
//                         return -1
//                     }
//                     return 0
//                 })
//                 : state.allRecetas.sort(function(a, b){
//                     if(a.name.toLowerCase() > b.name.toLowerCase()){
//                         return -1;
//                     }
//                     if(b.name.toLowerCase() > a.name.toLowerCase()){
//                         return 1
//                     }
//                     return 0
//                 })
//             return {
//                 ...state,
//                 allRecetas: allRecetas3
//             };


// CASE PARA EL DELETE
// case "DELETE_RECETA": return {
//     ...state,
//     allRecetas: state.allRecetas.filter(r => r.id !== action.payload)
//     recetasFiltradas: state.allRecetas.filter(r => r.id !== action.payload)
// }