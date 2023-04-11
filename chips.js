/**
 * @author Alexis Valenciano <gabr.933@gmail.com>
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const Chips = (props) => {
    const { value, onPress, chipStyle,type,selected,chipCloseStyle,valueStyleSelected,chipStyleSelected,valueStyle} = props;
    const returnStyles=()=>{
        if(type=='removable'){
            return removableStyles
        }
        return selectableStyles

    }
    const returnRemovable=()=>{
        if(type=='removable'){
            return(
                <Text style={[returnStyles().chipCloseBtnTxt,chipCloseStyle]}>x</Text>
            )
        }       
    }

    if (type=='selectable') {
        return (<TouchableOpacity  onPress={onPress}>
            <View style={selected?[{flexDirection:'row'},returnStyles().chipSelected, chipStyle,chipStyleSelected]:[{flexDirection:'row'},returnStyles().chip, chipStyle]}>
                <Text style={selected?[{ paddingHorizontal: 5 },returnStyles().valueStyleSelected,valueStyle,valueStyleSelected]:[{ paddingHorizontal: 5 },returnStyles().valueStyle,valueStyle]}>{value}</Text>
                {returnRemovable()}
            </View>
        </TouchableOpacity>)
    } else {
        return ( //Basic
            <View style={[{flexDirection:'row'},returnStyles().chip, chipStyle]}>
                <Text style={[{ paddingHorizontal: 5 },returnStyles().valueStyle,valueStyle]}>{value}</Text>
                {returnRemovable()}
            </View>
        )
    }

}

const removableStyles = StyleSheet.create({
    chip: {
        backgroundColor:'#2196F3',
        borderColor: '#2196F3',
        borderWidth: 1,
        margin: 5,
        padding:6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipCloseBtnTxt: {
        fontSize:20,
        color: '#FFF'
    },
    valueStyle:{
        color:'#FFF',
        fontSize:20
    }
})
const selectableStyles = StyleSheet.create({
    chip: {
        backgroundColor:'#FFF',
        borderColor: '#2196F3',
        borderWidth: 1,
        margin: 5,
        padding:6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    valueStyle:{
        color:'#2196F3',
        fontSize:20
    },
    chipSelected: {
        backgroundColor:'#2196F3',
        borderColor: '#2196F3',
        borderWidth: 1,
        margin: 5,
        padding:6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    valueStyleSelected:{
        color:'#FFF',
        fontSize:20
    }
})
export default Chips;