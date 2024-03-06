import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const DiaryLogs = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderDays = () => {
    const days = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const dayArray = Array.from({ length: days }, (_, index) => index + 1);
  
    return dayArray.map((day) => {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isDisabled = date > new Date();
  
      return (
        <TouchableOpacity
          key={day}
          style={[
            styles.dayContainer,
            isDisabled && styles.disabledDay,
            selectedDate && date.toDateString() === selectedDate.toDateString() && styles.selectedDay
          ]}
          onPress={() => handleDateClick(date)}
          disabled={isDisabled}
        >
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.dayText}>{getDayName(date)}</Text>
        </TouchableOpacity>
      );
    });
  };
  
  const getDayName = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  const handleDateClick = (date) => {
    // Set the selected date
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthYearText}>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </Text>
      <FlatList
        data={renderDays()}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
  },
  disabledDay: {
    backgroundColor: '#f0f0f0',
  },
  selectedDay: {
    backgroundColor: 'green', // Change to the desired color for selected dates
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DiaryLogs;