import { StyleSheet } from 'react-native'
import { Colors } from '../assets/variables'

export const StylesByMain=StyleSheet.create({
    container: {
        flex:1
    },
        growContainer: {
        flex:1,
        flexGrow:1
    },
    backgroundColorBlue: {
        backgroundColor:Colors.blue
    },
     backgroundColorWhite: {
        backgroundColor:Colors.white
    },
    h100:{height:120},
    marginT10: {
        marginTop: 10
    },
    rowBetweenContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    icon16: {
        height:16,
        width:16,
        resizeMode:'stretch'
    },
    alignJustifyCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },p16:{
        padding: 16
    },fon16White:{
        fontSize: 16,
        color: Colors.white
    },
     dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'transparent',
  },

})