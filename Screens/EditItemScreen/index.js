import React, { useLayoutEffect, useState, useEffect } from 'react';
import {Text,View,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import { doc, updateDoc } from "firebase/firestore";

const EditItemScreen = ({navigation, route}) => {

  const {item} = route.params

  const [initialState, setInitialState] = useState({
    productName: "",
    productPrice: "",
  });

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: 'Edit Item',
      headerTitleAlign: 'center',
    });
  },[])

  useEffect(() => {
    setInitialState({
      productName: item?.productName,
      productPrice: item?.productPrice,
    })
  }, []);

  const submit = async () =>{
    const itemRef = doc(db, "products", item?.id);
    await updateDoc(itemRef, initialState);
  }

  return (
    <View style={{flex: 1, alignItems: "center"}}>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, 
                borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={initialState?.productName} 
        onChangeText={(text)=> setInitialState({...initialState,...{productName: text}})}
        placeholder='Product Name'/>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, 
                borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={`${initialState?.productPrice}`} 
        onChangeText={(text)=> setInitialState({...initialState,...{productPrice: text}})}
        placeholder='PRoduct Price' keyboardType='number-pad'/>
        <TouchableOpacity 
          style={{width: '90%', height: 50, backgroundColor: 'red', 
                  position: "absolute", bottom: 20, borderRadius: 10, 
                  justifyContent: 'center', alignItems: 'center'}}
          onPress={submit}>
          <Text>Done</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default EditItemScreen;
