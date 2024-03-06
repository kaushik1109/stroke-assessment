import { View, Text } from 'react-native'
import React from 'react'
import DiaryLogs from './DiaryLogs'
import Questions_second from './Questions_second'
import Questions_first from './Questions_first'

const DiaryLogQs = () => {
  return (
    <View>
      <DiaryLogs />
      <Questions_first />
    </View>
  )
}

export default DiaryLogQs