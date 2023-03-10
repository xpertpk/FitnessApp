import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const WorkOutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    
const {completed, setCompleted} = useContext(FitnessItems);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40}}>
        <View style={{position:`relative`}}>
            <Image style={{width:`100%`, height:180}} source={{uri:route.params.image}} />
            <Ionicons onPress={() => navigation.navigate("Home")} name="arrow-back-outline" style={{color:`white`, fontSize:24, position:`absolute`, left:20, top:20}} />
      </View>
      {
        route.params.excersises.map((item, index) => (
            <Pressable key={index} style={{margin:10, flexDirection:`row`, alignItems:`center`}}>
                <Image style={{width:90, height: 90}} source={{uri: item.image}} />
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:13, fontWeight:`bold`, width:200}}>{item.name}</Text>
                    <Text style={{fontSize:15, color:`grey`}}>x {item.sets}</Text>
                </View>
                {
                  completed.includes(item.name) ? 
                  (
                    <AntDesign name="checkcircle" style={{color:`#03a9f4`, fontSize:20}} />
                  ) : (
                    null
                  )
                }
            </Pressable>
        ))
      }
    </ScrollView>

    <Pressable onPress={() => 
      {navigation.navigate("Fit", {excersises: route.params.excersises,})
      setCompleted([])
      }} style={{marginLeft:`auto`, marginRight:`auto`, marginVertical:20, backgroundColor:`#03a9f4`, padding:10, borderRadius:6, width:120}}>
        <Text style={{color:`#FFF`, textAlign:`center`, fontWeight:`500`, paddingLeft:25, paddingRight:25}}>Start</Text>
    </Pressable>
    </>
  )
}

export default WorkOutScreen

const styles = StyleSheet.create({})