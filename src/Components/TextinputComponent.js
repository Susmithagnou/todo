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


const TextinputComponent = (props) => {
// console.log('props', props)
    return (
            <TextInput
             style={{ 
                marginTop: 10, 
                width: props.Width, 
            backgroundColor: 'white',
             alignSelf: 'center', 
             borderWidth: 0.5 }}
             keyboardType={props.KeyboardType}
             placeholder={props.placeholder}
             value={props.value}
             onChangeText={(text)=>props.onChangeText(text)}
            />
    );
};

const styles = StyleSheet.create({

});
export default TextinputComponent;
