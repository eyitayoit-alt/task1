import { StatusBar } from 'expo-status-bar';

import React,{useState} from 'react';
import {Text, ImageBackground,Button,View,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
const DisplaySlackApp = () => {
const [gitView,setGitView]=useState(false)  
let view='' 
if(gitView){
 view=<WebView style={webstyle.webview} source={{uri:'https://github.com/eyitayoit-alt'}}/>
}
  return (
    <>
    <View
      style={styles.container }>
      <ImageBackground source={{uri:'https://avatars.githubusercontent.com/u/112722909?v=4'}} style={{width:100,height:100,borderRadius:40}} ></ImageBackground>
      <Text>eyitayoit</Text>
    <Button onPress={()=>{setGitView(true) }} title='Open Github'/>
       {view}

    </View>
    
    </>
  );
};
export default DisplaySlackApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
const webstyle= StyleSheet.create({webview: {
  width:200,
  height:200, 
  backgroundColor: '#ddd',
  alignItems: 'center',
  justifyContent: 'center',
},})
