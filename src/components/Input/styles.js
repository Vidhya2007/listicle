import {StyleSheet} from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
        marginBottom : 5,
        
    },
    label:{
        color : colors.blue,
        marginVertical : 8,
        fontSize : 14,
        fontWeight : 'bold'

    },
    inputContainer:{
      borderWidth : 1,
      borderColor : colors.grey,
      borderRadius : 14,
      flexDirection : 'row',
      alignItems : 'center',
    },
    input:{
        // borderWidth : 1,
        paddingHorizontal : 16,
        paddingVertical : 20,
        flex : 1,
        
    },
    eye:{
        width :24,
        height : 24,
        marginRight: 16,
    }
})