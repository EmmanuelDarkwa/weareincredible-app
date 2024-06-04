import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function AddPost() {
  const db = getFirestore(app);
  const [] = useState();

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "Categories"));

    querySnapshot.forEach((doc) => {
      console.log("Docs:",doc.data());
    });
  };
  return (
    <View>
      <Text>AddPost</Text>
    </View>
  );
}
