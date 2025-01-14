import React from 'react';
import { Pressable, View, Image , Text} from 'react-native';
import { styles } from './styles';

const AuthHeader = ({title, onBackPress}) => {
    
    return(
        <View style = {styles.container}>
        <Pressable  hitSlop = {20} onPress = {onBackPress}>
            <Image style = {styles.image} source = {require('../../assets/auth_back.png')}></Image>
        </Pressable>
        <Text style = {styles.title}>{title}</Text>
        </View>
    )
}


export default React.memo(AuthHeader);