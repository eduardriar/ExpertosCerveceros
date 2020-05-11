import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
    Button
} from 'react-native';
import styles from "./ContentStyle"
const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100; 

export default function ContentCard(props) {

   var bTitle="Registrate"
    if(props.registered){
        bTitle="¡Inscrito!"
        
    }else{
        bTitle="Registrate"
    }

    return (

       

        <View style={styles.sectionContainer}>
           
            <View style={styles.contentContainer}>
                <Image src={props.imageRoute}></Image>
                
                <Button  large  disabled={props.registered} style={styles.button} title={bTitle} onPress={props.onPress}></Button>
            </View>
           
           <View style={styles.contentContainer}>
                <Text style={styles.sectionTitle}>{props.sectionTitle}</Text>
                <Text style={styles.sectionDescription}>{props.sectionDescription}</Text>
                <Text style={styles.sectionDescription}>{props.place}</Text>
           </View>
            
            
    </View>
    
        

        
       
    )
}


