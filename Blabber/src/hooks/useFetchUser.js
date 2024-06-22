import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../services/firebase"

const useFetchUser = ()=>{
    const userCollectionRef = collection(db,'users');
    const [userList,setUserList] = useState([]);

    useEffect(() => {
      const unsub = onSnapshot(userCollectionRef,snapshot=>{
        const data = snapshot.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
        setUserList(data);
      })
    
      return () => {
        unsub();
      }
    }, [])
    


    return userList
}

export default useFetchUser