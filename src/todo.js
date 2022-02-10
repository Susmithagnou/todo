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
    TouchableOpacity,
    Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from './Components/ButtonComponent';
import TextinputComponent from './Components/TextinputComponent';
const Todo = (props) => {
    const [name, onChangeName] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [mob, onChangeMob] = React.useState(null);
    const [project, onChangeProject] = React.useState(null);
    const [task, onChangeTask] = React.useState(null);
    const [s_open, onChangeS_open] = React.useState(false);
    const [s_date, onChangeS_date] = React.useState(new Date());
    const [t_open, onChangeT_open] = React.useState(false);
    const [t_date, onChangeT_date] = React.useState(new Date());
    const [status, onChangeStatus] = React.useState('planned');
    const [list,onChangeList]=React.useState([]);
    const onTextChangeDetectTag = async() => {
        const emailType = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const numberType = /^[0-9\b]+$/;
        const alphaType = /^[a-zA-Z\w]+/;
        const alphanumType = /^[a-zA-Z0-9]+$/;
        console.log("list",list)
        let listarr=list;
        if (!(name.length > 3 && name.length < 20)) {
            Alert.alert(
                'Validation Error',
                ' Name Should 3-20 Chars and Numbers only',
            );
        } else if (email === '' || emailType.test(email) === false) {
            Alert.alert(
                'Validation Error',
                'Enter valid email',
            );
        }
        else if (mob === '' || mob.length < 10) {
            Alert.alert(
                'Validation Error',
                'Mobile Number must be 10 digits',
            );
        }
        else if (numberType.test(mob) === false) {
            Alert.alert(
                'Validation Error',
                'Enter valid Mobile Number',
            );
        }
        else if (!(project.length > 3 && project.length < 20)) {
            Alert.alert(
                'Validation Error',
                'Project Should Name 3-20 Chars and Numbers only',
            );
        }
        else if (!(alphanumType.test(project))) {
            Alert.alert(
                'Validation Error',
                'Special Character Not allowed',
            );
        }
        else if (!(task.length > 3 && task.length < 30)) {
            Alert.alert(
                'Validation Error',
                'Task Should 3-30 Chars and Numbers only',
            );
        }
        else {
            var item = JSON.stringify({
                name: name,
                email: email,
                mob: mob,
                project: project,
                task: task,
                s_date: s_date,
                t_date: t_date,
                status: status,
            })
            listarr.push(item)
            AsyncStorage.setItem('ListsData', JSON.stringify(listarr));
            onChangeName(null);
            onChangeEmail(null);
            onChangeMob(null);
            onChangeProject(null);
            onChangeTask(null);
            onChangeS_date(new Date());
            onChangeT_date(new Date());
            let Lists = await AsyncStorage.getItem('ListsData');
            onChangeList(JSON.parse(Lists))
            console.log('final', Lists)
            Alert.alert(
                'Successful',
                'To Do Item Saved Sucessfully',
            );
        }
        // console.log(item)
    
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 20 }}>Todo List</Text>
                <TextinputComponent
                placeholder={'Enter Your Name(3-20 chars only)'}
                value={name}
                Width={'95%'}
                onChangeText={(text)=>onChangeName(text)}
                />
             
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    
                     <TextinputComponent
                placeholder={'Enter E-mail Id'}
                value={email}
                Width={'45%'}
                onChangeText={(text)=>onChangeEmail(text)}
                />
                <TextinputComponent
                placeholder={'Enter A valid mobile Number'}
                value={mob}
                KeyboardType={'phone-pad'}
                Width={'45%'}
                onChangeText={(text)=>onChangeMob(text)}
                />
                    
                </View>
                <TextinputComponent
                placeholder={'Enter Project Name(3-20 chars and numbers only)'}
                value={project}
                Width={'95%'}
                onChangeText={(text)=>onChangeProject(text)}
                />
                
                <TextinputComponent
                placeholder={'Enter Task Description(3-20 chars/num/special character only)'}
                value={task}
                Width={'95%'}
                onChangeText={(text)=>onChangeTask(text)}
                />
                
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5, justifyContent: 'center', }}>
                    <TouchableOpacity onPress={() => onChangeS_open(true)}>
                        <Text style={{ textAlign: 'center' }}>Start Date</Text>
                        <Text style={{ textAlign: 'center' }}>{moment(s_date).format('DD-MMM-YYYY')}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode="date"
                        open={s_open}
                        date={s_date}
                        onConfirm={(date) => {
                            onChangeS_open(false),onChangeS_date(date)
                        }}
                        onCancel={() => onChangeS_open(false)}
                    />
                </View>
                <View style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5, justifyContent: 'center', }}>
                    <TouchableOpacity onPress={() => onChangeT_open(true)}>
                        <Text style={{ textAlign: 'center' }}>Target Date</Text>
                        <Text style={{ textAlign: 'center' }}>{moment(t_date).format('DD-MMM-YYYY')}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode="date"
                        open={t_open}
                        date={t_date}
                        onConfirm={(date) => {
                            onChangeT_open(false),onChangeT_date(date)
                        }}
                        onCancel={() => onChangeT_open(false)}
                    />
                </View>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 20, marginStart: 10 }}>Task Status:
                </Text>
                {status === 'planned' ? (
                    <TouchableOpacity>
                        <MaterialIcons
                            name="radio-button-on"
                            size={20}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => onChangeStatus('planned')}>
                        <MaterialIcons
                            name="radio-button-off"
                            size={20}
                        />
                    </TouchableOpacity>
                )}
                <Text>Planned</Text>
                {status === 'unplanned' ? (
                    <TouchableOpacity>
                        <MaterialIcons
                            name="radio-button-on"
                            size={20}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => onChangeStatus('unplanned')}>
                        <MaterialIcons
                            name="radio-button-off"
                            size={20}
                        />
                    </TouchableOpacity>
                )}
                <Text>Unplanned</Text>
                {status === 'In-progress' ? (
                    <TouchableOpacity>
                        <MaterialIcons
                            name="radio-button-on"
                            size={20}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => onChangeStatus('In-progress')}>
                        <MaterialIcons
                            name="radio-button-off"
                            size={20}
                        />
                    </TouchableOpacity>
                )}
                <Text>In-progress</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <ButtonComponent
                OnPress={() => onTextChangeDetectTag()}
                ButtonName={'Save'}
                BorderWidth={.5}
                PaddingHorizontal= {30}
                PaddingVertical={7}
                BorderRadius={7}
                TextBackgroundColor={'#42f23f'}
                FontWeight={'bold'}
                />
                <ButtonComponent
                OnPress={() => props.navigation.navigate('Detail')}
                ButtonName={'View'}
                BorderWidth={.5}
                PaddingHorizontal= {30}
                PaddingVertical={7}
                BorderRadius={7}
                TextBackgroundColor={'#f757dd'}
                FontWeight={'bold'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   
});
export default Todo;
