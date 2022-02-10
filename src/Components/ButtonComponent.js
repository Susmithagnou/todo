import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    NativeSyntheticEvent,
    NativeTouchEvent,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
    TextInput,
  } from 'react-native'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const ButtonComponent = (props) => {
console.log('props', props)
    return (
       <TouchableOpacity
       style={{ borderWidth: props.BorderWidth, 
        paddingHorizontal: props.PaddingHorizontal, 
        paddingVertical: props.PaddingVertical,
         borderRadius: props.BorderRadius }}
         onPress={()=>props.OnPress()}
         >
           <Text style={{
                backgroundColor: props.TextBackgroundColor, 
                fontWeight: props.FontWeight 
           }} >{props.ButtonName}</Text>
       </TouchableOpacity>
    );
    
};
const styles = StyleSheet.create({

});

export default ButtonComponent;
