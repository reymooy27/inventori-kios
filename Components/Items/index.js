import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Items = ({name,price, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{width: '100%',height: 50, borderRadius: 15, 
      padding: 10, backgroundColor: 'red',
      justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',
      marginVertical: 5,
      }}>
        <Text style={{color: 'black'}}>{name}</Text>
        <Text style={{color: 'black'}}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})

export default Items;
