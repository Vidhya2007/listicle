import {StyleSheet} from 'react-native';
import { colors } from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
       flexDirection : 'row',
       alignItems : 'center',
    //    marginVertical : 20,
        
    },
    line: {
        height : 1,
        flex : 1,
        backgroundColor : colors.lightGrey,
    },
    text:{
        color : colors.blue,
        fontSize : 14,
        fontWeight : 600,
    }
    
})