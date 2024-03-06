import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PRIMARY, SECONDARY, THIRD, FOURTH } from '../styles/global'

const Appointments = () => {
    const [isAppointment, setisAppointment]=React.useState(false)
    return (
        <View>
          {isAppointment ? (
            // Display the div if there are appointments
            <View>
              {/* Your appointment content goes here */}
              <Text style={styles.text}>You have new appointments!</Text>
              {/* Add other appointment details or components */}
            </View>
          ) : (
            // Display the text message if there are no appointments
            <View style={styles.textContainer}>
              <Text style={styles.text}>Oh, you have no new appointments</Text>
              <Text style={styles.text}>Schedule an appointment with a specialist now</Text>
            </View>
          )}
        </View>
      );
    };


export default Appointments

const styles = StyleSheet.create({
    text:{
        color:PRIMARY
    },
    textContainer:{
        alignItems:'center',
        marginTop:15
    }
  });