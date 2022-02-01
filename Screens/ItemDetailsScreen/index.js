import React, {useLayoutEffect,useState,useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import db from '../../firebase/firebase';


const ItemDetailsScreen = ({route, navigation}) => {
  const {id} = route.params

  const [item, setItem] = useState({});

  useEffect(() => {
    const unsub = async ()=>{
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let id = docSnap.id
        setItem({id,...docSnap.data()})
      }
    }
    unsub()

    return ()=> unsub()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item?.productName,
      headerTitleAlign: 'center',
    })

  }, [navigation, item?.productName])

  console.log(item)

  const deleteItem = async ()=>{
    await deleteDoc(doc(db, "products", id));
    navigation.navigate('HomeScreen')
  }


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{item?.productName}</Text>
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
