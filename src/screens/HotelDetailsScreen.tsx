import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';
import { StylesByMain } from '../styles/CommonStyles';
import CommonButton from '../components/CommonButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Screen } from '../assets/variables';

const { width } = Dimensions.get('window');

const HotelDetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
  const { hotel } = route.params;

  const roomTypes = [
    { id: 1, name: 'Standard Room', price: 2000 },
    { id: 2, name: 'Deluxe Room', price: 3000 },
    { id: 3, name: 'Suite', price: 4500 },
  ];

  const images = [
    hotel.image,
    hotel.image,
     hotel.image,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, autoScroll]);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
const onPressBookNow = () =>{
    navigation.navigate(Screen.BookingFormScreen)
}
  return (
    <Container header={<Header title={hotel?.name} />} footer={  <CommonButton containerStyle={{margin:24}} title={"Book Now"} onPress={()=>onPressBookNow()} />}>
<FlatList
  ref={flatListRef}
  data={images}
  keyExtractor={(_, index) => index.toString()}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  )}
  onViewableItemsChanged={onViewRef.current}
  viewabilityConfig={viewConfigRef.current}
  onTouchStart={() => setAutoScroll(false)}
  onTouchEnd={() => setAutoScroll(true)}
  onTouchCancel={() => setAutoScroll(true)}
/>
         <View style={StylesByMain.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              StylesByMain.dot,
              index === currentIndex ? StylesByMain.activeDot : StylesByMain.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelRating}>⭐ {hotel.rating} | ₹{hotel.pricePerNight} / night</Text>
        <Text style={styles.hotelDescription}>
          This is a beautiful hotel located in the heart of the city. Perfect for family stays, business trips, and
          vacations. Enjoy luxury rooms, modern amenities, and excellent hospitality.
        </Text>
      </View>
      <View style={styles.roomContainer}>
        <Text style={styles.sectionTitle}>Available Rooms</Text>
        {roomTypes.map((room) => (
          <View key={room.id} style={styles.roomCard}>
            <Text style={styles.roomName}>{room.name}</Text>
            <Text style={styles.roomPrice}>₹{room.price} / night</Text>
          </View>
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  carouselImage: {
    width: width,
    height: 220,
  },
  infoContainer: {
    padding: 15,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hotelRating: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  hotelDescription: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    lineHeight: 20,
  },
  roomContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  roomCard: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roomName: {
    fontSize: 14,
  },
  roomPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#ff6b00',
    margin: 15,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HotelDetailsScreen;
