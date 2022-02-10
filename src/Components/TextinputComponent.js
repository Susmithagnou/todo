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
    const [name, onChangeName] = React.useState(null);
console.log('props', props)
    return (
        <View>
            <TextInput
             style={styles.inputStyle}
             placeholder={props.placeholder}
             value={props.value}
             onChangeText={(text)=>props.onChangeText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: { 
        marginTop: 10, 
        width: '95%', 
    backgroundColor: 'white',
     alignSelf: 'center', 
     borderWidth: 0.5 }
});
export default TextinputComponent;
