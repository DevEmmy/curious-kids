"use client";

import { useRouter } from "next/navigation";
import Leadership from "@/Components/Kids-Dashboard/Leadership";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";
import LoadScreen from "@/AtomicComponents/LoadScreen";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("student")
    setStudent(data);

    if(!data){
      router.push("/signin")
      notifyError("UnAuthorized")
    }
  }, []);

  return (
    <>      
        {
          student ?
          <Leadership student={student}/>      
          :
          <LoadScreen />
        }
    </>
  );
}
