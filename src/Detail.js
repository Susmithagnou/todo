import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Detail= () => {
    
    return (
        <SafeAreaView>
 
                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 20 }}>Todo List</Text>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', borderWidth: 0.5, justifyContent: 'space-evenly' }}>
                    <Text style={styles.headertext}>S NO.</Text>
                    <Text style={styles.headertext}>Name</Text>
                    <Text style={styles.headertext}>Project</Text>
                    <Text style={styles.headertext}>Task</Text>
                    <Text style={styles.headertext}>Status</Text>
                    <Text style={styles.headertext}>Start Date</Text>
                    <Text style={styles.headertext}>Target Date</Text>
                    <Text style={styles.headertext}>Edit/Delete</Text>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headertext: {
        fontSize: 11,
        borderRightWidth: 0.5,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
export default Detail;
