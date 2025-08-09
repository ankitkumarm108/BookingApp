import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from './src/screens/SearchScreen'
import { Screen } from './src/assets/variables'
import { NavigationContainer } from '@react-navigation/native'
import HotelListScreen from './src/screens/HotelListScreen'
import HotelDetailsScreen from './src/screens/HotelDetailsScreen'
import BookingFormScreen from './src/screens/BookingFormScreen'

const App = () => {
  const RootStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={Screen.SearchScreen} component={SearchScreen} />
      <RootStack.Screen name={Screen.HotelListScreen} component={HotelListScreen} />
      <RootStack.Screen name={Screen.HotelDetailsScreen} component={HotelDetailsScreen} />
      <RootStack.Screen name={Screen.BookingFormScreen} component={BookingFormScreen} />
      </RootStack.Navigator>
      </NavigationContainer>
  )
}

export default App