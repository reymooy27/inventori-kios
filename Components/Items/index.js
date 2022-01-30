import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Items = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{width: '100%',height: 100, borderRadius: 15, 
      padding: 10, backgroundColor: 'red',
      justifyContent: 'center', alignItems: 'center',
      marginVertical: 5,
      }}>
        <Text style={{color: 'black'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})

export default Items;
