import React, {useLayoutEffect,useState,useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import db from '../../firebase/firebase';


const ItemDetailsScreen = ({route, navigation}) => {
  const {itemName} = route.params

  const [item, setItem] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: itemName,
      headerTitleAlign: 'center',
    })

  }, [navigation])

  useEffect(() => {
    const unsub = async ()=>{
      const docRef = doc(db, "products", itemName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem(docSnap.data())
      }
    }
    unsub()

    return ()=> unsub()
  }, [])

  const deleteItem = async ()=>{
    await deleteDoc(doc(db, "products", itemName));
    navigation.navigate('HomeScreen')
  }


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{itemName}</Text>
      <TouchableOpacity onPress={deleteItem}>
        <Text>Delete Item</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("EditItemScreen", {item})}>
        <Text>Edit Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default ItemDetailsScreen;
