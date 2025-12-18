import React from "react";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);


  return (
    <div className="w-100 bg-white border h-100 absolute right-5 top-15 p-5 px-9 rounded">
      <h2>Name: {userData?.name}</h2>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default Profile;
