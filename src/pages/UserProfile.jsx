import {React,useEffect,useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import {useParams,Link} from 'react-router-dom'
import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'


function UserProfile() {

 
  const {userProfile,searchUserProfile,isLoading} =useContext(GithubContext)

  const params =useParams();
 
  useEffect(()=>{
    searchUserProfile(params.login)
    


  },[])

  const {name,type,avatar_url,location,bio,blog,twitter_username,
    login,html_url,followers,following,public_repos,public_gists,hireable,}=userProfile



  if(isLoading){
    return(<Spinner/>)
  }
  else{
    return(<>
    <div className="w-full mx-auto lg:w-10/12">

      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>Back to search</Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img alt='userimage' src={avatar_url}/>
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0">
                {login}
              </h2>
            </div>
            
            </div> 
            <div className='col-span-2'>
              <div className="mb-6">
                <h1 className="text-3xl card-title">{name}</h1>
                <p>{bio}</p>
                <div className='mt-4 card-actions'>
                  <a href={html_url} className='btn btn-outline' target='_blank' rel='noreferrer'>Visit github profile</a>
                </div>
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
              </div>
              {hireable && (<div className='mx-1 badge badge-info'>Hireable</div>)}
            </div>
          </div> 
      </div>
    </div>
    
    
    
    </>)
  }
}

export default UserProfile
