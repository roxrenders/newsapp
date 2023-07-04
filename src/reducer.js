const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
        return{
            ...state,
            isLoading:true,
        }
        case "GET_STORIES":
            return{
                ...state,
                isLoading:false,
               hits: action.payLoad.hits,
               nbPages:action.payLoad.nbPages
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElem)=>
                    curElem.objectID !== action.payLoad
                ),
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payLoad,
            }

        case "NEXT_PAGE":
            let pageNum2 = state.page + 1;
            if(pageNum2 >= state.nbPages){
                pageNum2 = 0;
            } 

            return{
                ...state,
                page: pageNum2,
            };

        case "PREV_PAGE":
            let pageNum = state.page - 1;
            if (pageNum <= 0 ){
                pageNum = 0;
            }

            return{
                ...state,
                page: pageNum,
            };
    }
    return state;
};

export default reducer;
 