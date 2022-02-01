import React, {useLayoutEffect, useState,useEffect} from 'react';
import {TextInput,View, StyleSheet, Text, TouchableOpacity, FlatList, } from 'react-native';
import Items from '../../Components/Items';
import db from '../../firebase/firebase'
import {collection, onSnapshot } from "firebase/firestore"; 

const HomeScreen = ({navigation}) => {

  const [products, setProducts] = useState([]);
  const [textInput, setTextInput] = useState('');

  const [fullData, setfullData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (doc) => {
      const data = doc.docs.map((dc) => {
        let d = dc.data()
        let id = dc.id
        return{id,...d}
      });
    setProducts(data)
    setfullData(data)
    }); 

    unsub()
  }, [])
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerTitleAlign: 'center',
      headerRight: ()=> (
        <TouchableOpacity onPress={()=> navigation.navigate("AddItemScreen")}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      ),
      // headerLeft: ()=> (
      //   <TouchableOpacity>
      //     <Ionicons name="menu" color="#fff" size={26} style={{marginLeft: 40}}/>
      //   </TouchableOpacity>
      // ),
    });
  }, [navigation]);

  const search = (text)=>{
    const query = text.toLowerCase()
    const filteredData = fullData.filter(product=> product.productName.toLowerCase().includes(query))
    setProducts(filteredData)
    setTextInput(text)
  }

  const cancelSearch = ()=>{
    setTextInput("")
    setIsSearching(false)
  }

const renderItem = ({item})=> (
    <Items onPress={()=> navigation.navigate("ItemDetailsScreen", {id: item?.id})} 
    name={item?.productName}
    price={item?.productPrice}
    />
  )

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={textInput}
        onChangeText={(value)=> search(value)} 
        placeholder='Search'
        clearButtonMode='while-editing'
        />
      {products?.length < 1 ? <Text>No Product</Text> : <FlatList
        style={{width: '100%', paddingHorizontal: 20,}}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item,i) => `${i}`}
      />}
    </View>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
