import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity , Alert} from 'react-native';
import { useState, useEffect } from 'react';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'

export default function App() {

  const [toogle, setToogle] = useState(false)
  useEffect(()=>{
   Torch.switchState(toogle)
     
  }, [toogle])

  useEffect(() =>{
    const subscription = RNShake.addListener(()=> {
      setToogle(!toogle)
    })

    return () => subscription.remove()
  }, [])
  return (
     <TouchableOpacity style={toogle ? styles.containerLight : styles.container } onPress={() => setToogle(!toogle)}>
          <Image style={toogle ? styles.lightinOn : styles.lightinOff} source={ toogle ? require('./assets/eco-light.png') :require('./assets/eco-light-off.png')}/>

          <Image style={styles.dioLogo} source={ toogle ? require('./assets/logo-dio.png') :require('./assets/logo-dio-white.png')}/>
      
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight :{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightinOn : {
    resizeMode : 'contain',
    alignSelf : 'center',
    width : 150,
    height : 150
  },

  lightinOff : {
    resizeMode : 'contain',
    alignSelf : 'center',
    tintColor : 'white',
    width : 150,
    height : 150
  },
 dioLogo : {
    resizeMode : 'contain',
    alignSelf : 'center',
  
    width : 250,
    height : 250
  }
});
