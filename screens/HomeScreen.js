import { StyleSheet, Text, View, SafeAreaView, Image , ScrollView} from 'react-native'
import React, { useContext } from 'react'
import FitnessCard from '../components/FitnessCard';
import { FitnessItems } from '../Context';

const HomeScreen =()=> {
  const {workouts, calories, minutes} = useContext(FitnessItems);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40}}>

      <View style={{backgroundColor: `#03a9f4`, height:200, padding:10, marginTop:15, width:`100%`, marginBottom:70}}>

        <Text style={{color: `#FFF`, fontSize:16, fontWeight:`600`}}>SAM Fitness Club</Text>
        <View style={{flexDirection: `row`, alignItems:`center`, justifyContent:`space-between`}}>
          <View>
            <Text style={{color:`#fff`, fontSize:18, fontWeight:`bold`, marginTop:20, textAlign:`center`}}>{workouts}</Text>
            <Text style={{color:`#fff`, fontSize:12, fontWeight:`bold`, marginTop:0, textAlign:`center`}}>Workouts</Text>
          </View>
          <View>
            <Text style={{color:`#fff`, fontSize:18, fontWeight:`bold`, marginTop:20, textAlign:`center`}}>{calories}</Text>
            <Text style={{color:`#fff`, fontSize:12, fontWeight:`bold`, marginTop:0, textAlign:`center`}}>Kcal</Text>
          </View>
          <View>
            <Text style={{color:`#fff`, fontSize:18, fontWeight:`bold`, marginTop:20, textAlign:`center`}}>{minutes}</Text>
            <Text style={{color:`#fff`, fontSize:12, fontWeight:`bold`, marginTop:0, textAlign:`center`}}>Mins</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: "90%", height: 140, marginTop: 20, borderRadius: 8, objectFit:`cover` }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>

      </View>

      <FitnessCard />

    </ScrollView>
  )
}

export default  HomeScreen;

const styles = StyleSheet.create({})