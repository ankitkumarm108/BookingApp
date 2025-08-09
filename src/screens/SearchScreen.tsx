import { View,Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { StylesByMain } from '../styles/CommonStyles'
import { Colors, Screen } from '../assets/variables'
import DatePicker from 'react-native-date-picker'
import CityDropdown from '../components/CityDropdown'
import CommonButton from '../components/CommonButton'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
  const navigation = useNavigation()
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())
  const [openPicker, setOpenPicker] = useState(null)
    const [city, setCity] = useState(null);

    const onPressSearch=()=>{
      if(!city){
Alert.alert('Error', 'Please select city.');
return
      }
      
      
      navigation.navigate(Screen.HotelListScreen,{checkInDate,checkOutDate,city})
    }

  return (
    <Container>
      <View style={[StylesByMain.h100, StylesByMain.backgroundColorBlue]}>
        <Text style={{
          textAlign: "center",
          color: Colors.white,
          paddingTop: 8,
          fontSize: 24,
          fontWeight: '600'
        }}>Search Hotels & More</Text>
      </View>

      <View style={[
        StylesByMain.backgroundColorWhite,
        { marginTop: -70, marginHorizontal: 16, padding: 10, borderRadius: 10 }
      ]}>
        <CityDropdown city={city} setCity={setCity} />
        <TouchableOpacity
          onPress={() => setOpenPicker('checkIn')}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            marginBottom: 10
          }}
        >
          <Text style={{ color: Colors.black }}>
            Check-In: {checkInDate.toDateString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOpenPicker('checkOut')}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 12
          }}
        >
          <Text style={{ color: Colors.black }}>
            Check-Out: {checkOutDate.toDateString()}
          </Text>
        </TouchableOpacity>

        <DatePicker
          modal
          mode="date"
          open={openPicker !== null}
          date={openPicker === 'checkOut' ? checkOutDate : checkInDate}
          onConfirm={(selectedDate) => {
            setOpenPicker(null)
            if (openPicker === 'checkIn') {
              setCheckInDate(selectedDate)
              // Optional: adjust checkout date if it's before new check-in date
              if (selectedDate >= checkOutDate) {
                const nextDay = new Date(selectedDate)
                nextDay.setDate(selectedDate.getDate() + 1)
                setCheckOutDate(nextDay)
              }
            } else if (openPicker === 'checkOut') {
              setCheckOutDate(selectedDate)
            }
          }}
          onCancel={() => setOpenPicker(null)}
          minimumDate={openPicker === 'checkOut' ? checkInDate : new Date()}
        />
        <CommonButton style ={StylesByMain.marginT10} title={"Search"} 
        onPress={()=>onPressSearch()}
        />
      </View>
    </Container>
  )
}

export default SearchScreen
