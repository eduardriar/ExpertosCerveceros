/* eslint-disable prettier/prettier */

import { Platform, Dimensions, StyleSheet} from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    marginTop: sizeH * 2.5,
    borderRadius: sizeW * 5,
    width: sizeW * 97,
    alignSelf: 'center',
    marginBottom: 10,
    elevation: 10
  },
  containerAutoComplete:{
    borderRadius: sizeW * 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputContainerStyle:{
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomLeftRadius: sizeW * 5,
    borderBottomRightRadius: sizeW * 5,
  },
  autocompleteContainer: {
    borderColor: Colors.white,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginTop: 20,
  },
  itemText: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
  label: {
    fontSize: WIDTH * 0.035,
    color: '#B7B7B7',
    fontFamily: 'Raleway-SemiBold',
    marginTop: HEIGHT * 0.005,
  },
  containerCards: {
    marginTop: WIDTH * 0.1,
    marginLeft: WIDTH * 0.05
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  title:{
    fontSize: WIDTH * 0.1,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    marginTop: sizeH * 2.5,
    alignSelf: 'center'
  },
  titleText: {
    fontSize: WIDTH * 0.05,
    marginTop: sizeH * 2.5,
    color: Colors.black,
    fontFamily: 'Raleway-Black',
    alignSelf: 'center'
  }
});

export default styles