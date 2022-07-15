const GithubReducer =(state,action)=>{
    switch(action.type){
        case 'getUsers':
            return{
              
                ...state,
               
                users:action.payLoad,
                isLoading:false

            }
            case 'clearUsers':
                return{
                    ...state,
                    users:[],
                    isLoading:false
                  
                }
                case 'getUserProfile':
                    return{
                        ...state,
                        userProfile:action.payLoad,
                        isLoading:false
                    }
            case 'setLoading':
                return{
                    ...state,
                    isLoading:true
                }
        default:
            return state
    }

}

export default GithubReducer