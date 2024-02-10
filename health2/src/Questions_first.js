import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import questionsArray from './Questions_array';
import { PRIMARY, SECONDARY, THIRD, FOURTH } from '../styles/global';
import Questions_second from './Questions_second'
import { useNavigation } from '@react-navigation/native';

const Questions_first = () => {
    const [selectedOptions, setSelectedOptions] = useState(Array(questionsArray.length).fill(null));
    const navigation = useNavigation(); // Obtain the navigation object
  
    const handleOptionToggle = (questionIndex, option) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] =
        newSelectedOptions[questionIndex] === option ? null : option;
      setSelectedOptions(newSelectedOptions);
    };
  
    const navigateToNextPage = () => {
      navigation.navigate('Questions_second', {});
    };
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Let's Begin</Text>
        </View>
        {questionsArray.map((question, index) => (
          <View style={styles.questionBox} key={question.id}>
            <View style={styles.question}>
              <Text style={styles.questionID}>{question.id}.</Text>
              <Text style={styles.questionContent}>{question.question}</Text>
            </View>
            <View style={styles.optionsContainer}>
              {['A', 'B'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionButton,
                    selectedOptions[index] === option ? styles.selectedOption : null,
                  ]}
                  onPress={() => handleOptionToggle(index, option)}
                >
                  <Text>{`${option}. ${question[`option${option}`]}`}</Text>
                </TouchableOpacity>
              ))}
              {question.optionC && question.optionD && ['C', 'D'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionButton,
                    selectedOptions[index] === option ? styles.selectedOption : null,
                  ]}
                  onPress={() => handleOptionToggle(index, option)}
                >
                  <Text>{`${option}. ${question[`option${option}`]}`}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
  
        <TouchableOpacity style={styles.nextButton} onPress={navigateToNextPage}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default Questions_first;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    alignItems: 'center',
    marginTop: 27,
  },
  titleText: {
    color: PRIMARY,
    fontSize: 20,
  },
  questionBox: {
    marginTop: 20,
  },
  question: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  questionID: {
    marginRight: 5,
    fontSize: 15,
  },
  questionContent: {
    fontSize: 17,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  optionButton: {
    width: '48%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FOURTH,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderColor:'black',
  },
  selectedOption: {
    backgroundColor: PRIMARY,
  },
  nextButton:{
    backgroundColor:PRIMARY,
    width:200,
    height:40,
    marginTop:35,
    marginLeft:'25%',
    borderRadius:10
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    marginTop:10,
  }
});
