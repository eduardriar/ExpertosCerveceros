
import {Platform,Dimensions,StyleSheet,} from 'react-native'
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
    container: {
    backgroundColor: '#FFF',
    flex: 1,
    marginTop: 10,
    borderRadius:20,
  
      },
      autocompleteContainer: {
        borderColor:Colors.white,
        backgroundColor: '#ffffff',
        borderRadius:50,
        marginTop:20,
      
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
      gallery:{
        flexDirection:"row",
        flexWrap:"wrap"
      },
      titleText:{
        fontSize: WIDTH * 0.05,
        marginTop:10,
    color: Colors.black,
    fontFamily: 'Raleway-Black',
    alignSelf: 'center'
      }

});

export default styles