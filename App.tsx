import React from 'react'
import {SafeAreaView} from 'react-native'
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
// import { DimensioneScreen } from './src/screens/DimensioneScreen';
import { PosicionScreen } from './src/screens/PosicionScreen';
export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <BoxObjectModel /> */}
      {/* <DimensioneScreen /> */}
      <PosicionScreen />
    </SafeAreaView>
  )
}
export default App;