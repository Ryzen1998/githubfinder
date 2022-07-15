import { createContext,useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext =createContext();

const githubUrl = process.env.REACT_APP_GITHUB_URL;
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider =({children})=>{

    const initialState={
        users:[],
        userProfile:{},
        isLoading:false
    }
 const [state,dispatch]=useReducer(GithubReducer,initialState)

 const setLoading =()=>{
    dispatch({type:'setLoading'})
 }

    const searchUsers=async (text)=>{
        setLoading();
        const params = new URLSearchParams({
            q:text

        })
        const response = await fetch(`${githubUrl}/search/users?${params}`,{
            headers:{
                Authorization:`token ${githubToken}`
            }
        })
        const {items} =await response.json()
       
        dispatch({
            type:'getUsers',
            payLoad:items,

        })
       
    
    
    }

    const searchUserProfile=async (username)=>{
        setLoading();
        
        const response = await fetch(`${githubUrl}/users/${username}`,{
            headers:{
                Authorization:`token ${githubToken}`
            }
        })
        if(response.status===404){
            window.location='/notfound'
        }else{ 
            
            const data =await response.json()
           
      
            dispatch({
                type:'getUserProfile',
                payLoad:data,
    
            })}
       
       
    
    
    }
    const clearUsers=()=>{
        dispatch({
            type:'clearUsers',

        })

    }

     

      return <GithubContext.Provider value={{users:state.users,userProfile:state.userProfile,isLoading:state.isLoading,searchUsers,clearUsers,searchUserProfile
      } }>
        {children}
      </GithubContext.Provider>

}

export default GithubContext