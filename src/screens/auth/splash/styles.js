import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/color';

export const styles = StyleSheet.create({

    container : {
        padding: 24,
        flexDirection: 'column',
        alignItems : 'center',
        justifyContent : 'center',
        flexGrow: 1,
        

    },
    image : {
        width : '100%',
        height : 200
    },
    titleContainer : {
        marginVertical : 54,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign : 'center',

    },
    innerTitle : {
        color : colors.orange,
        textDecorationLine : 'underline',

    },
    footerText : {
        color : colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign : 'center',
        marginTop : 30,
    },
    
})