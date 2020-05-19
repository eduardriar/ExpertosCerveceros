/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { Platform, Dimensions, StyleSheet, } from 'react-native'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  mainContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#CC493A"
  },
  sectionContainer: {
    elevation: 10,
    flex: 1,
    flexDirection: "row",
    alignSelf:'center',
    width: sizeW * 95,
    marginTop: sizeW * 2.5,
    marginBottom: sizeW * 2.5,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Jost-Black'
  },
  titleText: {
    fontSize: WIDTH * 0.1,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    marginTop: sizeH * 2.5,
    alignSelf: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  contentContainer: {
    flex: 0.45,
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 2,
    marginBottom: 5,
    marginTop: 5
  },
  button: {
    borderRadius: sizeW* 2,
    flex: 0.2,
    alignSelf:'center',
    marginTop: sizeH * 2.5,
    backgroundColor: "#39CC7F",
    width: sizeW * 30,
    height: sizeH * 4,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{    
    fontSize: sizeH * 2,
    color: Colors.white,
    fontFamily: 'Jost-Light',
  },
  img: {
    width: sizeH * 17,
    height: sizeH * 17,
    margin: sizeW * 2,
  }
});

export default styles

// export default {
//   /** Content **/
//   bgLayout: {  
//     marginTop: sizeH * 3,  
//   },
//   bgImg: {
//     position: 'absolute',
//     width: WIDTH,
//     height: sizeH * 35,
//   },

//   /** Header **/
//   hTop: {
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   hImg: {
//     widht: sizeH * 9,
//     height: sizeH * 11,
//     margin: sizeH
//   },
//   hRow: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   hContent: {
//     justifyContent: 'center',
//     marginLeft: 10
//   },
//   hTopText: {
//     fontSize: 20,
//     fontFamily: 'Montserrat-Regular',
//     color: '#FFF',
//     marginBottom: sizeH
//   },
//   hTopDesc: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-Regular',
//     color: 'rgba(255,255,255,0.6)',
//     marginBottom: sizeH * 4
//   },

//   /** Form **/
//   regForm: {
//     width: '100%',
//     marginBottom: sizeH * 4
//   },
//   regText: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-Regular',
//     color: '#FFF'
//   },
//   infoBox: {
//     backgroundColor: '#FFF',
//     elevation: 10,
//     shadowOffset: {
//       width: 10,
//       height: 10
//     },
//     shadowColor: '#999',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     marginHorizontal: 20,
//     borderRadius: 3,
//     padding: 15
//   },
//   fSelect: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderColor: 'rgba(36,42,56,0.05)'
//   },
//   fRow: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 5,
//     ...Platform.select({
//       ios: {
//         paddingVertical: 10,
//       },
//     }),
//     paddingHorizontal: 5,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderColor: 'rgba(36,42,56,0.07)'
//   },
//   fPicker: {
//     flex: 1
//   },
//   fPickerItem: {
//     flex: 1,
//     width: '100%',
//     paddingTop: 0,
//     paddingBottom: 0
//   },
//   fIcon: {
//     color: 'rgba(36,42,56,0.4)',
//     fontSize: 24,
//     width: 30,
//     marginRight: 5
//   },
//   fInput: {
//     flex: 1,
//     fontFamily: 'Montserrat-Regular',
//     fontSize: 12
//   },

//   fBtn: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FF8901',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     borderRadius: 3,
//     marginTop: sizeH
//   },
//   fBtnText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 14,
//     color: '#FFF'
//   },
//   fBtnIcon: {
//     fontFamily: 'Montserrat-Regular',
//     fontSize: 16,
//     color: '#FFF'
//   },
//   forgotPassword: {
//     fontFamily: 'Montserrat-Regular',
//     fontSize: 12,
//     alignSelf: 'flex-end',
//     color: 'rgba(36,42,56,0.8)'
//   },

//   account: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 20
//   },
//   accountText: {
//     fontFamily: 'Montserrat-Regular',
//     fontSize: 12,
//     color: 'rgba(36,42,56,0.8)'
//   },
//   accountBtn: {
//     paddingVertical: 5,
//     paddingHorizontal: 5
//   },
//   accountBtnText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 12,
//     color: 'rgba(36,42,56,0.99)'
//   },

//   connect: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   connectOr: {
//     flex: 1,
//     width: '100%'
//   },
//   connectText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 18,
//     marginBottom: 15,
//     color: 'rgba(36,42,56,0.99)',
//     alignSelf: 'center'
//   },
//   connectLine: {
//     flex: 1,
//     position: 'absolute',
//     borderBottomWidth: 1,
//     borderColor: '#FF0000'
//   },
//   connectHeader: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 12,
//     color: 'rgba(36,42,56,0.99)',
//     alignSelf: 'center',
//     marginBottom: 15
//   },
//   smn: {
//     flexDirection: 'row'
//   },
//   smnBtn: {
//     flexDirection: 'row',
//     marginHorizontal: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 3
//   },
//   smnIcon: {
//     fontSize: 18,
//     color: '#FFF',
//     marginRight: 5
//   },
//   smnText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 14,
//     color: '#FFF'
//   },
//   facebook: {
//     backgroundColor: '#395498'
//   },
//   googlePlus: {
//     backgroundColor: '#D64937'
//   }
// }
