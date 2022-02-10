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
    FlatList,
    Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from './Components/ButtonComponent';
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
   const Delete = (id) => {
        var lists = list
        lists.splice(id, 1);
        onChangeList( lists )
        AsyncStorage.setItem('ListsData', JSON.stringify(lists));
        Alert.alert(
            'Delete',
            'To Do Item deleted Sucessfully',
        );
    }
    return (
        <SafeAreaView>

            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 20 }}>Todo List</Text>
            <View style={{ marginTop: 20 }}>
                
                    <FlatList
                   style={{
                        
                    }}
                        data={list}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            let parseditem = JSON.parse(item)
                            // console.log(parseditem)
                            return (
                            <View style={{
                                borderWidth: 0.5,
                        marginTop:10,
                                backgroundColor: 'white',
                                width: '90%',
                                alignSelf: 'center',
                                paddingVertical: 10}}>
                                <Text style={styles.headertext}>S NO.:{index + 1}</Text>
                                <Text style={styles.headertext}>Name:{parseditem.name}</Text>
                                <Text style={styles.headertext}>Project:{parseditem.project}</Text>
                                <Text style={styles.headertext}>Task:{parseditem.task}</Text>
                                <Text style={styles.headertext}>Status:{parseditem.status}</Text>
                                <Text style={styles.headertext}>Start Date:{moment(parseditem.S_date).format('DD/MM/YY')}</Text>
                                <Text style={styles.headertext}>Target Date:{moment(parseditem.T_date).format('DD/MM/YY')}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <ButtonComponent 
                                OnPress={() => Delete()}
                                ButtonName={'Delete'}
                                BorderWidth={.5}
                                PaddingHorizontal= {30}
                                PaddingVertical={7}
                                BorderRadius={7}
                                Background={'red'}
                                FontWeight={'bold'}
                                TextColor={'#fff'}
                                />
                                <ButtonComponent 
                                OnPress={() => alert('hii')}
                                ButtonName={'Edit'}
                                BorderWidth={.5}
                                PaddingHorizontal= {30}
                                PaddingVertical={7}
                                BorderRadius={7}
                                Background={'blue'}
                                FontWeight={'bold'}
                                TextColor={'#fff'}
                                />
                                </View>
                            </View>
                            )
                        }}
 
                    />
               
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
