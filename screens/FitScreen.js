import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excercises = route.params.excersises;
    const current = excercises[index];
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginTop:40}}>
      <Image style={{width: `100%`, height:250}} source={{uri: current.image}} />
      <Text
        style={{
            fontSize:20,
            textAlign:`center`, 
            fontWeight:`bold`,
            marginTop:30
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
            fontSize:40,
            textAlign:`center`, 
            fontWeight:`bold`,
            marginTop:30
        }}
      >
        x {current.sets}
      </Text>

      <Pressable onPress={() => navigation.navigate("Rest")} style={{marginLeft:`auto`, marginRight:`auto`, marginTop:35, backgroundColor:`#03a9f4`, padding:10, borderRadius:20, width:150}}>
        <Text style={{color:`#FFF`, textAlign:`center`, fontWeight:`500`, paddingLeft:25, paddingRight:25}}>Done</Text>
    </Pressable>

    <View style={{position:`relative`, flexDirection:`row`, marginTop:40, textAlign:`center`, marginLeft:`auto`, marginRight:`auto`}}>
      <Pressable style={{backgroundColor:`green`, padding:10, marginHorizontal:10, borderRadius:20}}>
        <Text style={{fontSize:12, color:`#FFF`, fontWeight:`bold`, paddingLeft:15, paddingRight:15}}>PREV</Text>
      </Pressable>
      <Pressable style={{backgroundColor:`green`, padding:10, marginHorizontal:10, borderRadius:20}}>
        <Text style={{fontSize:12, color:`#FFF`, fontWeight:`bold`, paddingLeft:15, paddingRight:15}}>SKIP</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})