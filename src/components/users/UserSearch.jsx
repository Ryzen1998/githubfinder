import  { React,useState,useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import Alerts from '../layout/Alerts'
import { searchUsers } from '../../context/github/GithubActions'



function UserSearch() {
    const [text,setText]=useState('')
    const {users,dispatch}=useContext(GithubContext)
    const {setAlert}=useContext(AlertContext)

    const handleChange =(e)=>{
        setText(e.target.value)


    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(text===''){
           setAlert('please enter something','error')
        }
        else{
              dispatch({type:'setLoading'})
             const usersList =await searchUsers(text)
             
             dispatch({type:'getUsers',
             payLoad:usersList
            })
           setText('')
        }

    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" value={text} onChange={handleChange} placeholder='Search' className="w-full pr-40 bg-gray-200 input lg text-black" />
                    <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md">Go</button>
                </div>
            </div>
        </form>
      </div>
      {users.length>0 &&(

<div className=""><button onClick={()=>dispatch({type:'clearUsers'})} className="btn btn-ghost btn-lg">clear</button></div>
      )}
      
     <Alerts/>
    </div>
  )
}

export default UserSearch
