import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Formik } from 'formik';

export default function AddPost() {
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "Categories"));

    querySnapshot.forEach((doc) => {
      console.log("Docs:",doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    });
  };
  return (
    <View className='p-10'>
      <Formik
      initialValues={{title: '', desc: '', category: '', address: '', price: '', image: ''}}
      onSubmit={value=>console.log(value)}
      >
        {({handleChange, handleBlur, handleSubmit, values})=>(
          <View>
            <TextInput
            style={styles.input}
            placeholder="Title"
            value={values?.title}
            onChangeText={handleChange('title')}
            />
             <TextInput
            style={styles.input}
            placeholder="Description"
            value={values?.desc}
            numberOfLines={5}
            onChangeText={handleChange('desc')}
            />
            <TextInput
            style={styles.input}
            placeholder="Price"
            value={values?.price}
            keyboardType="number-pad"
            onChangeText={handleChange('price')}
            />
            <Button onPress={handleSubmit} 
            className='mt-7'
            title="submit"/>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
borderWidth: 1,
borderRadius: 10,
marginTop: 10,
marginBottom: 5,
padding: 10,
paddingHorizontal: 17,
fontSize: 17
  }
})
