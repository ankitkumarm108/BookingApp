import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { hotelsData, Screen } from '../assets/variables'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
const HotelListScreen = () => {
    const navigation = useNavigation()

    const onPressHotel=(val)=>{
navigation.navigate(Screen.HotelDetailsScreen,{hotel:val})
    }

  return (
    <Container header={<Header/>}>
        
          <FlatList
      data={hotelsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={()=>onPressHotel(item)}>
          <Image source={item?.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text>₹{item.pricePerNight} / night</Text>
          <Text>⭐ {item.rating}</Text>
        </TouchableOpacity>
      )}
    />
    </Container>
  )
}

export default HotelListScreen

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    height: 150,
    width:"100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});