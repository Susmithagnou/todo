import React from 'react';
import type {Node} from 'react';
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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const todo: () => Node = () => {
const [name,onChangeName]=React.useState(null);
const [email,onChangeEmail]=React.useState(null);
const [mob,onChangeMob]=React.useState(null);
const[project,onChangeProject]=React.useState(null);
const[task,onChangeTask]=React.useState(null);
const[s_open,onChangeS_open]=React.useState(false);
const[s_date,onChangeS_date]=React.useState(new Date());
const[t_open,onChangeT_open]=React.useState(false);
const[t_date,onChangeT_date]=React.useState(new Date());
const[status,onChangeStatus]=React.useState('planned');
  return (
    <SafeAreaView>
      <View>
      <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', marginTop: 20 }}>Todo List</Text>
      <TextInput
      style={{ marginTop: 10, width: '95%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5 }}
      placeholder="Enter Your Name(3-20 chars only)"
value={name}
onChangeText={onChangeName}
      >
      </TextInput>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TextInput
                        style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5 }}
                        placeholder="Enter E-mail Id"
                        value={email}
                        onChangeText={onChangeEmail}
                    />
                    <TextInput
                        style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5 }}
                        placeholder="Enter A valid mobile Number"
                        value={mob}
                        onChangeText={onChangeMob}
                    />
                </View>
                <TextInput
                    style={{ marginTop: 10, width: '95%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5 }}
                    placeholder="Enter Project Name(3-20 chars and numbers only)"
                    value={project}
                    onChangeText={onChangeProject}
                /><TextInput
                style={{ marginTop: 10, width: '95%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5 }}
                placeholder="Enter Task Description(3-20 chars/num/special character only)"
                value={task}
                onChangeText={onChangeTask}
            />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5, justifyContent: 'center', }}>
                        <TouchableOpacity onPress={()=>onChangeS_open(true)}>
                            <Text style={{ textAlign: 'center' }}>Start Date</Text>
                            <Text style={{ textAlign: 'center' }}>{moment(s_date).format('DD-MMM-YYYY')}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode="date"
                            open={s_open}
                            date={s_date}
                            onConfirm={(date) => {
                                 onChangeS_date(date) , onChangeS_open(false) 
                            }}
                            onCancel={() =>onChangeS_open(false)}
                        />
                    </View>
                    <View style={{ marginTop: 10, width: '45%', backgroundColor: 'white', alignSelf: 'center', borderWidth: 0.5, justifyContent: 'center', }}>
                        <TouchableOpacity onPress={()=>onChangeT_open(true)}>
                            <Text style={{ textAlign: 'center' }}>Target Date</Text>
                            <Text style={{ textAlign: 'center' }}>{moment(t_date).format('DD-MMM-YYYY')}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode="date"
                            open={t_open}
                            date={t_date}
                            onConfirm={(date) => {
                                onChangeT_date(date) , onChangeT_open(false) 
                           }}
                           onCancel={() =>onChangeT_open(false)}
                        />
                    </View>
                    </View>
                    <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                       <Text style={{color:'black',fontSize:20,marginStart:10}}>Task Status:
                           </Text> 
                           {status=== 'planned' ? (
                        <TouchableOpacity>
                            <MaterialIcons
                                name="radio-button-on"
                                size={20}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={()=>onChangeStatus('planned')}>
                            <MaterialIcons
                                name="radio-button-off"
                                size={20}
                            />
                        </TouchableOpacity>
                    )}
                    <Text>Planned</Text>
                    {status=== 'unplanned' ? (
                        <TouchableOpacity>
                            <MaterialIcons
                                name="radio-button-on"
                                size={20}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={()=>onChangeStatus('unplanned')}>
                            <MaterialIcons
                                name="radio-button-off"
                                size={20}
                            />
                        </TouchableOpacity>
                    )}
                    <Text>Unplanned</Text>
                    {status=== 'In-progress' ? (
                        <TouchableOpacity>
                            <MaterialIcons
                                name="radio-button-on"
                                size={20}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={()=>onChangeStatus('In-progress')}>
                            <MaterialIcons
                                name="radio-button-off"
                                size={20}
                            />
                        </TouchableOpacity>
                    )}
                    <Text>In-progress</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                    <TouchableOpacity
                        // onPress={() => this.onsubmit()}
                        style={{ borderWidth: 0.5, paddingHorizontal: 30, paddingVertical: 7, borderRadius: 7 }}>
                        <Text style={{ backgroundColor: '#42f23f', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    // onPress={() => this.filterdata()}
                        style={{ borderWidth: 0.5, paddingHorizontal: 30, paddingVertical: 7, borderRadius: 7 }}>
                        <Text style={{ backgroundColor: '#f757dd', fontWeight: 'bold' }}>View</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20}}>
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
    headertext:{
        fontSize:11,
        borderRightWidth:0.5,
        textAlign:'center',
        justifyContent:'center'
    }
});
export default todo;
