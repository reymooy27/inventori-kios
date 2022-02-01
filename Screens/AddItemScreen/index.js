import React, {useState, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';
import { productsSelector, setProducts } from '../../Redux/Slices/appSlice';
import {addDoc, collection} from 'firebase/firestore'
import db from '../../firebase/firebase';

const AddItemScreen = ({navigation}) => {
  const products = useSelector(productsSelector)
  const dispatch = useDispatch()


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add Item',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addItem = async ()=>{
    if(productName !== ''){
      // dispatch(setProducts({productName, productPrice}))
      await addDoc(collection(db, "products"), {
        productName,
        productPrice
      });
      setProductName('')
      setProductPrice('')
      navigation.navigate('HomeScreen')
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={productName} 
        onChangeText={(value)=> setProductName(value)} 
        placeholder='Product Name'/>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={productPrice} 
        onChangeText={(value)=> setProductPrice(value)} 
        placeholder='Product Price' keyboardType='number-pad'/>
      <TouchableOpacity style={{width: '60%', height: 50,justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 10, marginVertical: 10, borderRadius: 10}} onPress={addItem}>
        <Text style={{color: 'white'}}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default AddItemScreen;
