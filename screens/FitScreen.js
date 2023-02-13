import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excercises = route.params.excersises;
    const current = excercises[index];
    const navigation = useNavigation();
    const {completed, setCompleted, workouts, setWorkouts, calories, setCalories, minutes, setMinutes} = useContext(FitnessItems);
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

      { 
        index + 1 >= excercises.length ? (
        <Pressable 
          onPress={() => {
            navigation.navigate("Home")
          }} 
          style={{
            marginLeft:`auto`, 
            marginRight:`auto`, 
            marginTop:35, 
            backgroundColor:`#03a9f4`, 
            padding:10, 
            borderRadius:20, 
            width:150
          }}
        >
          <Text style={{color:`#FFF`, textAlign:`center`, fontWeight:`500`, paddingLeft:25, paddingRight:25}}>Done</Text>
        </Pressable>
        ) : (
          <Pressable 
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkouts(workouts + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.30);
            setTimeout(() => {
              setIndex(index +1)
            }, 2000);
          }}
          style={{
            marginLeft:`auto`, 
            marginRight:`auto`, 
            marginTop:35, 
            backgroundColor:`#03a9f4`, 
            padding:10, 
            borderRadius:20, 
            width:150
          }}
        >
          <Text style={{color:`#FFF`, textAlign:`center`, fontWeight:`500`, paddingLeft:25, paddingRight:25}}>Done</Text>
        </Pressable>
        )
      }
        

    <View style={{position:`relative`, flexDirection:`row`, marginTop:40, textAlign:`center`, marginLeft:`auto`, marginRight:`auto`}}>
      <Pressable disabled={index === 0} onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1)
            }, 2000);
          }} style={{backgroundColor:`green`, padding:10, marginHorizontal:10, borderRadius:20}}>
        <Text style={{fontSize:12, color:`#FFF`, fontWeight:`bold`, paddingLeft:15, paddingRight:15}}>PREV</Text>
      </Pressable>
      { 
        index + 1 >= excercises.length ? (
          <Pressable onPress={() => {
            navigation.navigate("Home");
         
          }} style={{backgroundColor:`green`, padding:10, marginHorizontal:10, borderRadius:20}}>
            <Text style={{fontSize:12, color:`#FFF`, fontWeight:`bold`, paddingLeft:15, paddingRight:15}}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index +1)
            }, 2000);
          }} style={{backgroundColor:`green`, padding:10, marginHorizontal:10, borderRadius:20}}>
            <Text style={{fontSize:12, color:`#FFF`, fontWeight:`bold`, paddingLeft:15, paddingRight:15}}>SKIP</Text>
          </Pressable>
        )}
        
    </View>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})