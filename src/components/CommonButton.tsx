
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../assets/variables";


const CommonButton = ({
  style,
  title,
  titleStyle = {},
  containerStyle = {},
  isLoading = false,
  ...props
}:any) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        {...props}
        style={[styles.backgroundContainer, style]}
      >
        {title &&
          (isLoading ? (
            <ActivityIndicator
              size={16}
              color={Colors.white}
            />
          ) : (
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={
                [styles.title, titleStyle]
              }
            >
              {title}
            </Text>
          ))}
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  backgroundContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    backgroundColor: Colors.blue,
    paddingVertical:12,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    lineHeight: 16,
    paddingHorizontal: 10,
    textTransform: 'capitalize',
    color: Colors.white
  },
});
