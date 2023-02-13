import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const RestScreen = () => {

  const navigation = useNavigation();

  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const startTime = () => {
    setTimeout(() => {
      if(timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1)
    }, 1500);
  }

  useEffect(() => {
    startTime();
    // clearTimeout
    return () => clearTimeout(timer);
  }, [startTime, timer])

  return (
    <SafeAreaView style={{marginTop:40}}>
      <Image style={{width:`100%`, height: 400}} source={{uri: "https://hmco.pk/fitness.jpg"}} />
      <Text
        style={{
          fontSize:24,
          textAlign:`center`,
          fontWeight:`900`,
          marginTop:50
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize:24,
          textAlign:`center`,
          fontWeight:`900`,
          marginTop:50
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({})