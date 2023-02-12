import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCard =()=> {
    const FitnessData = fitness;
    const navigation = useNavigation();
  return (
    <View style={{padding: 10}}>
      {
        FitnessData.map((item, key) => (
            <Pressable 
              onPress={() => navigation.navigate("WorkOut", {
                image: item.image,
                excersises: item.excersises,
                id: item.id
              })}
              key={key} 
              style={{ justifyContent: "center", alignItems: "center", position:`relative` }}
            >
                <Image style={{ width: "90%", height: 150, marginTop: 20, borderRadius: 8, objectFit:`cover` }} source={{uri:item.image}} />
                <Text style={{position:`absolute`, color:`#fff`, fontSize:15, fontWeight:`bold`, left:30, top:30}}>{item.name}</Text>
                <MaterialCommunityIcons style={{color:`#FFF`, position:`absolute`, bottom: 15, left:30, fontSize:20}} name="lightning-bolt" />
            </Pressable>
        ))
      }
      {/* <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://www.nourishmovelove.com/wp-content/uploads/2021/09/BeginnerBanner1.png"
          }}
        />
      </View>
      <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://t4.ftcdn.net/jpg/03/20/49/25/360_F_320492585_7JiruW5kktFIqpi50BW0JSE0OXFWXMMV.jpg"
          }}
        />
      </View>
      <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://t4.ftcdn.net/jpg/03/97/90/53/360_F_397905342_P9fHropaA8GlQXcM9J4mM2DkgBy01yGH.jpg"
          }}
        />
      </View>
      <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://www.movenourishbelieve.com/wp-content/uploads/2017/04/FitGirl_MNBBanner.jpg"
          }}
        />
      </View>
      <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0554/7062/0845/collections/meister_elite_banner_womens_workout_gloves.jpg?v=1636138708"
          }}
        />
      </View>
      <View style={{alignItems:`center`, justifyContent: `center`}}>
        <Image 
          style={{
            width:`90%`,
            height:140,
            marginTop:20,
            borderRadius:8,
            objectFit:`cover`
          }}
          source={{
            uri: "https://www.tallaghtleisure.com/wp-content/uploads/2016/03/Gym-Banner.jpg"
          }}
        />
      </View> */}
    </View>
  )
}

export default FitnessCard;

const styles = StyleSheet.create({})