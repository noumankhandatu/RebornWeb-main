'use client'
import LeftSideBar from '@/components/LeftSideBar'
import { redirect } from "next/navigation";
import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '../../../../lib/UserConext';
import ScriptGenrate from '@/components/ScriptGenrate';
const Page = () => {

  const userData = useUser();  

  const [disable, setDiable] = useState(false);
  const [name,setName] = useState('')
  const [userApi,setUserApi] = useState(null)
  const [accessToken,setAccessToken] = useState(null)
  const [isGenrateApi,setIsGenrateApi] = useState(false)
  const [treePlanted,setTreePlanted] = useState(0)

  useEffect(() =>{
    const cookies = parseCookies();
    const name = cookies?.user_name;

    setName(name)
    if(userData !== undefined){
      setUserApi(userData?.data.api_key)
    }
    if(userApi !== undefined && userApi !== null){
      setIsGenrateApi(true)
      console.log(isGenrateApi,userApi)
    }
    const accessToken = cookies?.access_token;
    if(!accessToken){
      redirect('/login')
    }else{
      setAccessToken(accessToken)
    }

 if(userApi){
  const getTreeData = async () => {
    try {
        const apiUrl = `${process.env.API_URL}/user/tree-record?api_key=${userApi}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            if(data.status !== 200){
              // toast.error(data.message) 
              setDiable(false);
            }else{
              setTreePlanted(data.data.tree_planted)      
              setDiable(false);
            }
          
          } else {
            
            setDiable(false);
            toast.error('Request failed');
        }
    } catch (error) {
        console.error('Request failed:', error.message);
        setDiable(false);
    }
};
getTreeData()



 }



  
  },[userData,userApi,isGenrateApi])

  const generateApi = async () => { 
    setDiable(true)
      try {
        
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/user/api-key`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();        
           setIsGenrateApi(true)
           toast.success("Successfuly Genrate User Api")
           setDiable(false);
          //  redirect('/user-profile')
          } else {
            // Handle error response
            console.log(response)
          }
        } catch (error) {
          console.error('Request failed:', error.message);
          setDiable(false);
        }
      
};


// pages/utils/generateScript.js








  return (
    <div className='overflow-hidden h-full'>

  


    {/* about sec 1  */}
    <section className='w-full flex items-start justify-start mt-20 min-h-screen '>
               <LeftSideBar />
               <main className='max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full'>
          <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans'>Welcome <span className='text-green font-semibold'>{name && name}</span></h3>
{/* {
  isGenrateApi && <ScriptGenrate userApi={userApi}  />
} */}
          <div className='w-full flex flex-col gap-5 items-center justify-center'>
          <div style={{ backgroundImage: "url('/assets/images/treeplantmain.jpg')" }} className='bg-white w-[90%] flex relative items-center flex-col justify-center px-3 h-[300px] mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl '>
                <h1 className='z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-white font-medium font-worksans'>{treePlanted} trees planted</h1>

                <div className='absolute overflow-hidden rounded-xl z-0 top-0 left-0 w-full h-full bg-[#000] opacity-[0.4]'></div>
          </div>
          {
            !isGenrateApi && 
            <div className='flex items-center justify-center w-full my-6'>
            <button disabled={disable} onClick={() => generateApi()}  className={` ${disable && 'opacity-50'} text-lg bg-secondary font-semibold hover:bg-green cursor-pointer px-4 py-3 rounded-lg text-white`}>Genrate a Key</button>
          </div>
          }
         
          <div style={{ backgroundImage: "url('/assets/images/reforest.jpg')" }} className='bg-white w-[90%] flex relative items-center flex-col justify-center px-3 h-[300px] mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl '>
                <h1 className='z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-white font-medium font-worksans'>You have 0 climate points</h1>

                <Link href='' className='text-white text-2xl underline my-3 z-20 font-semibold' >See All Assets</Link>

                <div className='absolute overflow-hidden rounded-xl z-0 top-0 left-0 w-full h-full bg-[#000] opacity-[0.4]'></div>
          </div>

          </div>
     

        </main>
    </section>
    </div>
  )
}

export default Page