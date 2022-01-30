import React, { useLayoutEffect } from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

const EditItemScreen = ({navigation, route}) => {

  const {item} = route.params

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: 'Edit Item',
      headerTitleAlign: 'center',
    });
  },[])

  return (
    <View style={{flex: 1, alignItems: "center"}}>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={item?.productName} 
        placeholder='Product Name'/>
      <TextInput 
        style={{width: '90%', padding: 10, borderWidth: 2, borderColor: 'black', marginVertical: 10, borderRadius: 10}} 
        value={`${item?.productPrice}`} 
        placeholder='PRoduct Price' keyboardType='number-pad'/>
    </View>
  );
}

const styles = StyleSheet.create({})

export default EditItemScreen;
