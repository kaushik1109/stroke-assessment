import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, SECONDARY, THIRD, FOURTH } from '../styles/global'
import WeeklyBarGraph from './WeeklyBarGraph'
import Appointments from './Appointments'
import DiaryLogs from './DiaryLogs'

const Dashboard = () => {
    const weeklyData = [30, 50, 20, 40, 60, 10, 45];
    const navigation = useNavigation(); // Obtain the navigation object

  const navigateToNextPage = () => {
    // Navigate to another page (replace 'Questions_first' with the actual screen name)
    navigation.navigate('DiaryLogQs');
  };

    return (
        <View>
            <Text style={styles.greet}>Hi, James!</Text>
            <View style={styles.suggestBox}>
                <View style={styles.suggestionTextBox}>
                    <Text style={styles.suggestionText}>Stroke Assessment</Text>
                    <Text style={styles.suggestionText}>Take Up the Quiz Again</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.Button} ><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.graphContainer}>
                <Text>Your Weekly Report : 1st March to 7th March</Text>
                <WeeklyBarGraph data={weeklyData} />
            </View>
            <View style={styles.appointmentContainer}>
                <Text style={styles.heading}>Next Appointments</Text>
                <Appointments />
            </View>
            <View style={styles.diarylogs}>
                <Text style={styles.heading}>Diary Logs</Text>
                <DiaryLogs />
            </View>
            <View style={styles.diaryLogsSubmit}>
                <Text style={styles.completeText}>
                Complete your daily health log – your well-being matters every day
                </Text>
                <TouchableOpacity style={styles.Button2} onPress={navigateToNextPage} ><Text style={styles.buttonText}>Lets Begin</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard


const styles = StyleSheet.create({
    greet: {
        marginTop: 10,
        marginLeft: 70,
        fontSize: 20
    },
    suggestBox: {
        marginLeft: 20,
        borderRadius: 10,
        height: 80,
        marginRight: 20,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6E9EFD'
    },
    Button: {
        backgroundColor: '#4684FE',
        padding: 10,
        margin: 10,
        borderRadius: 7,
        width: 80,
        alignItems: 'center'
    },
    suggestionText: {
        color: 'white',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    graphContainer: {
        borderWidth:0.5,
        margin:10,
        marginTop:20,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appointmentContainer:{
        // alignItems:'center',
        marginTop:15,
        margin:10

    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        // marginLeft:10
    },
    diarylogs:{
        margin:10
    },
    completeText:{
        fontSize:12.25
    },
    diaryLogsSubmit:{
        marginTop:5,
        alignItems:'center'
    },
    Button2:{
        backgroundColor: '#4684FE',
        padding: 10,
        width:150,
        margin: 20,
        borderRadius: 7,
        // width: 80,
        alignItems: 'center'
    }

})