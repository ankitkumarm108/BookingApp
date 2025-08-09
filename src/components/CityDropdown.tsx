import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const indianCities = [
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Bengaluru', value: 'bengaluru' },
  { label: 'Hyderabad', value: 'hyderabad' },
  { label: 'Ahmedabad', value: 'ahmedabad' },
  { label: 'Chennai', value: 'chennai' },
  { label: 'Kolkata', value: 'kolkata' },
  { label: 'Pune', value: 'pune' },
  { label: 'Jaipur', value: 'jaipur' },
  { label: 'Patna', value: 'patna' },
  { label: 'Lucknow', value: 'lucknow' },
  { label: 'Bhopal', value: 'bhopal' },
  { label: 'Varanasi', value: 'varanasi' },
];

const CityDropdown=({city, setCity})=>{

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Your City</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={indianCities}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose city..."
        searchPlaceholder="Search city..."
        value={city}
        onChange={item => {
          setCity(item.value);
          console.log("Selected city:", item.label);
        }}
      />
    </View>
  );
}
export default CityDropdown

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 10,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: '#000',
  },
});
