import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, ImagePaths } from '../assets/variables'
import { StylesByMain } from '../styles/CommonStyles'
import { useNavigation } from '@react-navigation/native'

const Header = ({title = ''}) => {
    const navigation = useNavigation()
const onPressBack=()=>{
navigation.goBack()
}
  return (
    <View style={[StylesByMain.rowBetweenContainer,StylesByMain.p16, StylesByMain.backgroundColorBlue]}>
        <TouchableOpacity onPress={()=>onPressBack()}>
            <Image source={ImagePaths.back} style={StylesByMain.icon16} tintColor={Colors.white} />
        </TouchableOpacity>
        <View style={[StylesByMain.growContainer, StylesByMain.alignJustifyCenter]}>
      <Text style={StylesByMain.fon16White}>{title}</Text>
      </View>

    </View>
  )
}

export default Header

