

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,TouchableOpacity,
  Text,
  useColorScheme,
  View,
  Picker,TextInput
} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { Form } from './screens/form';
import { DropdownDate, DropdownComponent } from 'react-dropdown-date';
import CheckBox from '@react-native-community/checkbox';


const App = () => {
  const [isSelected, setSelection] = useState(false);
  const [input,setinput] = useState("");
  const [input2,setinput2] = useState("");
  const [form,setform] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(()=>{

  },[form])


  return (
    <>
    {form? (
      <>
       <WebView
      source={{uri: 'https://cgifederal.secure.force.com/'}}
      style={styles.video}
    />
    
    <TouchableOpacity style={{paddingBottom:25,justifyContent:'center',
                alignItems:'center',}} 
                onPress={()=>{setform(false)}}>
            <View style={styles.button}>
                    <Text style={styles.buttontext}> Settings </Text>
            </View>
            </TouchableOpacity>
      </>

    ):(

      <>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
       <View style={styles.input1}>
                <Text style={{fontSize:16,fontWeight:'bold',marginBottom:6}}>Number of Refreshes</Text>
                <TextInput placeholder="Max Hundred"
                textAlign='center'
                onChangeText={input => setinput(input)}
                defaultValue={input}
                style = {styles.textfield}
                />
            </View>
            <View style={styles.input1}>
                <Text style={{fontSize:16,fontWeight:'bold',marginBottom:6}}>Time Between Refreshes</Text>
                <TextInput placeholder="One-Fifteen(minutes)"
                textAlign='center'
                onChangeText={input2 => setinput2(input2)}
                defaultValue={input2}
                style = {styles.textfield}
                />
            </View>
            <View style={styles.input1}> 
            <TouchableOpacity style={{paddingTop:25,justifyContent:'center',
                alignItems:'center',}} 
                onPress={()=>{setOpen(true)}}>
            <View style={styles.button}>
                    <Text style={styles.buttontext}> Select Date </Text>
            </View>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />

            </View>
            <View style={styles.input1}>
             
        <Text style={{fontSize:20}}><CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> Save username and Password?</Text>
            </View>
            <TouchableOpacity style={{paddingTop:25,justifyContent:'center',
                alignItems:'center',}} 
                onPress={()=>{setform(true)}}>
            <View style={styles.button}>
                    <Text style={styles.buttontext}> Save </Text>
            </View>
            </TouchableOpacity>
      </View>
      </>
    )

    }
    
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 400,
    width: 420,
    flex: 1
  },
  textfield:{
    height:40,
    width:280,
    backgroundColor:'#b8e4f5', 
    borderRadius:10,

},
input1:{
  justifyContent:'center',
    alignItems:'center',
    paddingTop:20
},
button:{
  width: 130,
  height: 35,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  backgroundColor:'#367d99',
},
});

export default App;
