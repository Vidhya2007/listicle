import React, { useState } from 'react';
import { Pressable, View, Image , Text, TextInput} from 'react-native';
import { styles } from './styles';

const Seperator = ({title}) => {
     
    return(
        <View style = {styles.container}>
            <View style = {styles.line}></View>
            <Text style = {styles.text}> {title} </Text>
            <View style = {styles.line}></View>
        </View>
    )
       
}


export default React.memo(Seperator);