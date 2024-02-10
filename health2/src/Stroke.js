import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { PRIMARY, SECONDARY, THIRD, FOURTH } from '../styles/global'
import { useNavigation } from '@react-navigation/native';
import Questions_first from './Questions_first';

const Stroke = () => {
    const navigation=useNavigation();

    const navigateToNext = () =>{
        navigation.navigate('Questions_first', {});
    }
  return (
    <View style={styles.disclaimer}>
      {/* <Text>Here, we will have the landing page of stroke assessment. That is, when the user clicks on the button on the dashboard, this page will be displayed first. It will also have the disclaimer and the consent page requesting the users to provide accurate information. A button called "Start" will also be present. On clicking this button, user will be redirected to the page where the questions are displayed.</Text> */}
      <Text style={styles.title}>Looks Like You are New Here</Text>
      <Text style={styles.heading}>Take up a simple stroke assessment</Text>
      <Text style={styles.description}>Elevate stroke risk assessment with our user-friendly questionnaire, guiding users through expertly crafted questions, each contributing to a predictive scoring system. Please mark accurate answers to all the questions.</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToNext}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>

    
    </View>
  )
}

export default Stroke;

const styles = StyleSheet.create({
disclaimer:{
    flex:1,
    alignItems:'center',
//   justifyContent:'center',
},
title:{
  color:PRIMARY,
  fontSize:27,  
  marginTop:130,
  

},
heading:{
color:SECONDARY,
fontSize: 23,
marginTop:80,
},
description:{
    fontSize:12,
    marginTop:60,
    color:'grey',
    width:300,
},
button:{
    marginTop:60,
    backgroundColor:PRIMARY,
    padding:10,
    width:120,
    borderRadius:14
},
buttonText:{
    color:'white',
    textAlign:'center',
}

});