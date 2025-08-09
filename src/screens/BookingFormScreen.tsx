import React, { useState } from 'react';
import { TextInput, Alert, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Container from '../components/Container';
import Header from '../components/Header';
import CommonButton from '../components/CommonButton';
import { StylesByMain } from '../styles/CommonStyles';

const BookingFormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [roomType, setRoomType] = useState(null);

  const roomOptions = [
    { label: 'Single Room', value: 'single' },
    { label: 'Double Room', value: 'double' }
  ];

  const handleBooking = () => {
    if (!name || !email || !guests || !roomType) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Booking Successful', `Thank you, ${name}! Your room is booked.`);
  };

  return (
  <Container containerStyle={[StylesByMain.p16]} header={<Header title={"Booking Form"} />} footer={  <CommonButton containerStyle={{margin:24}} title={"Confirm Booking"} onPress={handleBooking} />}>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Number of Guests"
        keyboardType="numeric"
        value={guests}
        onChangeText={setGuests}
      />

      <Dropdown
        style={styles.dropdown}
        data={roomOptions}
        labelField="label"
        valueField="value"
        placeholder="Select Room Type"
        value={roomType}
        onChange={item => setRoomType(item.value)}
      />
    </Container>
  );
};

export default BookingFormScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,
    height: 50,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
