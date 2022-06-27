import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from './src/components/BottomSheet';

export default function App() {
  const ref = useRef<BottomSheetRefProps>(null)

  const onPress= useCallback(()=> {
    const isActive = ref?.current?.isActive()
    if(isActive){
      ref?.current?.scrollTo(0);
    }else{
      ref?.current?.scrollTo(-200);
    }

  }, [])
  return (
    <GestureHandlerRootView style={{flex:1}} >
      <View style={styles.container}>
        <Text>App</Text>
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{flex:1, backgroundColor:'orange'}}>
            <Text style={{borderWidth:2}}>Deneme</Text>
          </View>
        </BottomSheet>
      </View>
     
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:50,
    borderRadius:25,
    aspectRatio:1,
    backgroundColor:'white',
    opacity:.6,

  }
})