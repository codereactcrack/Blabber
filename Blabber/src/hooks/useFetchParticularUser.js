import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../services/firebase"

const useFetchParticularUser = (currentUser)=>{

    const userCollectionRef = collection(db,'users');
    const currentUserRef = query(userCollectionRef,where('userEmail','==',currentUser.email))
    const [getCurrentUser,setgetCurrentUser] = useState();

    useEffect(() => {
      const unsub = onSnapshot(currentUserRef,snapshot=>{
        const data = snapshot.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
        setgetCurrentUser(data);
      })
      return () => {
        unsub();
      }
    }, [])
    
    return getCurrentUser
}

export default useFetchParticularUser