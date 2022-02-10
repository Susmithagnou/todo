import React, { useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Detail = () => {
    const [list, onChangeList] = React.useState([])
    const getItem = async () => {
        let Lists = await AsyncStorage.getItem('ListsData');
        console.log(Lists)
        onChangeList(JSON.parse(Lists))
    }
    useEffect(() => {
        getItem();
    }, [])
    return (
        <SafeAreaView>

            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 20 }}>Todo List</Text>
            <View style={{ marginTop: 20 }}>
                <View style={{
                    borderWidth: 0.5,
                    justifyContent: 'space-evenly',
                    backgroundColor: 'white',
                    width: '90%',
                    alignSelf: 'center',
                    paddingVertical: 10
                }}>
                    <FlatList
                        data={list}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            let parseditem = JSON.parse(item)
                            // console.log(parseditem)
                            return (<View>
                                <Text style={styles.headertext}>S NO.:{index + 1}</Text>
                                <Text style={styles.headertext}>Name:{parseditem.name}</Text>
                                <Text style={styles.headertext}>Project:{parseditem.project}</Text>
                                <Text style={styles.headertext}>Task:{parseditem.task}</Text>
                                <Text style={styles.headertext}>Status:{parseditem.status}</Text>
                                <Text style={styles.headertext}>Start Date:{moment(parseditem.S_date).format('DD/MM/YY')}</Text>
                                <Text style={styles.headertext}>Target Date:{moment(parseditem.T_date).format('DD/MM/YY')}</Text>
                            </View>
                            )
                        }}

                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headertext: {
        fontSize: 15,
        borderRightWidth: 0.5,
        marginStart: 20

    }
});
export default Detail;
