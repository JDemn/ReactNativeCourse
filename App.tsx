import React from 'react'
import {SafeAreaView} from 'react-native'
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModel } from './src/screens/BoxObjectModel';
export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <BoxObjectModel />
    </SafeAreaView>
  )
}
export default App;