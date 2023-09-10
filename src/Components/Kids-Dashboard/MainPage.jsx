import GemView from '@/AtomicComponents/GemView'
import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import { getMyDetails } from '@/services/request'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MainPage = ({studentt}) => {
  const [student, setStudent] = useState(studentt)                             

  // useEffect(()=>{
  //   getMyDetails()
  // }, [])
  
  useEffect(()=>{
    let student = getMyDetails()
    setStudent(student)
  }, [student])

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     router.push('/signin'); // Redirect to the login page if not authorized
  //   }
  // }, [isAuthorized]);

  return (
    <div>
        <Nav student={student}/>
        <div className="flexbs lf:flex-wrap font-sans px-xPadding mt-[120px]">
            <div className='w-[72%] lf:w-full cflexss'>
               <MainContentOnOverview student={student}/>
            </div>
           
            
            <div className="fixed top-[100px] right-[4%] lf:w-full w-[25%] cflexmm gap-[1em]">
              <GemView student={student}/>
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Implement your condition check here, e.g., check if the user is authenticated
  let studentt = getMyDetails()
  let isAuthorized = false
  if(studentt){
    isAuthorized = true
  }

  return {
    props: {
      isAuthorized,
      studentt
    },
  };
}

export default MainPage