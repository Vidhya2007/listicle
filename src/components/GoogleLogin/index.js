import React from 'react';
import {styles} from './styles';

import {
    View,
    StyleSheet,
    Pressable,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native' ;

const GoogleLogin = () => {
   
    return(
        <TouchableOpacity activeOpacity={0.6} style = {styles.container}>
            <Image style = {styles.image}source = {require('../../assets/Vector.png')}></Image>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);