     
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";


const initialState = {
    isLoading: true,
    query: "",
    nbPages:0,
    page:0,
    hits:[]
}
let API = "http://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    // const [state, setState] = useState(initialState);
    
    
    const [state, dispatch] = useReducer( reducer, initialState );
    // let isLoading = true;
    
    const fetchApiData  = async(url)=>{
        
        dispatch({type: "SET_LOADING"});

try{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    dispatch({
        type: "GET_STORIES",
       payLoad:{
            hits: data.hits,
            nbPages: data.nbPages,
        },
    });
            // let isLoading = false;
        }catch(error){
            console.log(error);
        }
    }

    const removePost = (post_ID) => {
        dispatch ({ type: "REMOVE_POST", payLoad: post_ID })
    };

    const searchPost = (searchQuery)=>{
        dispatch({
            type: "SEARCH_QUERY",
            payLoad: searchQuery,
     });
    }

    const getNextPage = ()=>{
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    const getPrevPage = ()=>{
        dispatch({
            type: "PREV_PAGE",
        })
    }
    
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`); 
    }, [state.query, state.page]);

    return <AppContext.Provider value={{...state, removePost, searchPost, getPrevPage, getNextPage}} >
        {children}
        </AppContext.Provider>;
};

// custom hook - 
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext,  }; 
