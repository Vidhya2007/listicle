import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        borderColor : colors.grey,
        borderWidth : 1,
        borderRadius : 4,
        width : 22,
        height : 22,
        marginTop : 10,

    },
    innerContainer:{
        backgroundColor : colors.grey,
        width : '100%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center',

    },
    checkIcon:{
        width : 12,
        height : 9,

    }
})