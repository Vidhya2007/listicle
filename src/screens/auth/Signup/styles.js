import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/color';

export const styles = StyleSheet.create({

    container : {
        padding: 24,
    },

    checkBoxContainer: {
        flexDirection : 'row',
        alignItems: 'center',
    },
    
    checkBoxText : {
       color : colors.blue,
       fontSize : 14,
       fontWeight : 500,
       marginLeft : 15,
       marginTop : 10,
    },

    checkBoxInnerText:{
        fontWeight : 'bold',
    },

    buttonStyle :{
        marginVertical: 20,
    },
    footerText:{
        color : colors.blue,
        textAlign : 'center',
    },
    footerLink : {
        fontWeight : 'bold',
    }
})