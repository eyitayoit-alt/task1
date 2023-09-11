import React,{useState} from 'react';
import {Text, Image,Button,View,Alert} from 'react-native';
import { WebView } from 'react-native-webview';

const DisplaySlackApp = () => {
const [gitView,setGitView]=useState(false)   
  

  return (
    <View
      style={{
        flex: 1,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require("./IMG_3763.JPG")} style={{width:200,height:200,borderRadius:40}} />
      <Text>eyitayoit</Text>
      <Button onPress={()=>{
      setGitView(true)
      }} title="GitHub" />
    {gitView && <WebView source={{ uri:'https://github.com/eyitayoit-alt'}} />
    }
    </View>
  );
};
export default DisplaySlackApp;