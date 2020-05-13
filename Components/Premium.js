/* eslint-disable prettier/prettier */

import React, {useEffect, Component} from 'react';
import { View, Text, Button ,Alert} from 'react-native';
import styles from "./Cards/ContentStyle"
import EventCard from "./Cards/ContentCard"
import { ScrollView } from 'react-native-gesture-handler';
//import { withNavigation } from "@react-navigation/native";


class Premium extends Component {
  
  constructor(props){
    super(props);
    this.state={
      ev1:{sectionTitle:"Conciertos",sectionDescription:"Nuestros territorios son rockeros y cerveceros, por eso nos amas.",place:"Lugar: Territorios pub beer",imageRoute:"",registered:false},
      ev2:{sectionTitle:"St Patricks",sectionDescription:"Hazte un BEERLANDES y disfruta la beerlandesaen nuestros territorios. Ven adisfrutar del 13 al 17 de marzo.",place:"Lugar: Territorios pub beer",imageRoute:"",registered:false},
      ev3:{sectionTitle:"Torneo FIFA",sectionDescription:"¡Vamos a ser los primeros en estrenar el juego #FIFA18, y por eso BEER y SoccerCup se unen para realizar el Torneo Nacional de a parejas mas grande de Colombia! ",place:"Lugar: Territorios pub beer",imageRoute:"",registered:false},
      ev4:{sectionTitle:"Torneo Cervecero",sectionDescription:"¡HOY! Es la primera eliminatoria para el Campeonato Fondo Blanco, y celebrar el #DíaMundialDeLaCerveza ¡Los esperamos!",place:"Lugar: Territorios pub beer",imageRoute:"",registered:false},
      events:[]

    }
  }
  fetchEvents=()=>{
    var ev1=this.state.ev1
    var ev2=this.state.ev2
    var ev3=this.state.ev3
    var ev4=this.state.ev4
    var evs=[ev1,ev2,ev3,ev4]
 
    this.setState({
      events:evs
    })
   
  }

  componentDidMount(){
    
    this.fetchEvents()
   
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.ev1!==prevState.ev1){
      this.fetchEvents()
    } else if(this.state.ev2!==prevState.ev2){
      this.fetchEvents()
    } else if(this.state.ev3!==prevState.ev3){
      this.fetchEvents()
    }else if(this.state.ev4!==prevState.ev4){
      this.fetchEvents()
    }
   }

onPress=(event)=>{

  
    if (event==="Conciertos"){
     
      this.setState({
        ev1:{sectionTitle:"Conciertos",sectionDescription:"Nuestros territorios son rockeros y cerveceros, por eso nos amas.",place:"Lugar: Territorios pub beer",imageRoute:"",registered:true}
      })

      Alert.alert("Felicidades, estas inscrito!",
                  "Te esperamos para que disfrutes del evento",
                  [
                 
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
      );
    } 
    if (event==="St Patricks"){
      this.setState({
        
      ev2:  {sectionTitle:"St Patricks",sectionDescription:"Hazte un BEERLANDES y disfruta la beerlandesaen nuestros territorios. Ven adisfrutar del 13 al 17 de marzo.",place:"Lugar: Territorios pub beer",imageRoute:"",registered:true}
  })

      Alert.alert("Felicidades, estas inscrito!",
                  "Te esperamos para que disfrutes del evento",
                  [
                   
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
      );
    }
     if (event==="Torneo FIFA"){
      this.setState({
       
        ev3:{sectionTitle:"Torneo FIFA",sectionDescription:"¡Vamos a ser los primeros en estrenar el juego #FIFA18, y por eso BEER y SoccerCup se unen para realizar el Torneo Nacional de a parejas mas grande de Colombia! ",place:"Lugar: Territorios pub beer",imageRoute:"",registered:true},
  })

      Alert.alert("Felicidades, estas inscrito!",
                  "Te esperamos para que disfrutes del evento",
                  [
               
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
      );
    }
     if (event==="Torneo Cervecero"){
      this.setState({
       ev4:{sectionTitle:"Torneo Cervecero",sectionDescription:"¡HOY! Es la primera eliminatoria para el Campeonato Fondo Blanco, y celebrar el #DíaMundialDeLaCerveza ¡Los esperamos!",place:"Lugar: Territorios pub beer",imageRoute:"",registered:true}
        })

      Alert.alert("Felicidades, estas inscrito!",
                  "Te esperamos para que disfrutes del evento",
                  [
                 
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
      );
    }

  
}
  render(){
    return(
      <>
        <ScrollView style={styles.mainContainer}>
          <Text style={styles.principalTitle}>Eventos Premium</Text>
          {
            this.state.events.map((props,index)=>
            <EventCard sectionTitle={props.sectionTitle} sectionDescription={props.sectionDescription} place={props.place} imageRoute={props.imageRoute} onPress={()=>this.onPress(props.sectionTitle)} registered={props.registered} key={index}></EventCard>  
            )
          }
            
        </ScrollView>
      </>
    )
  }
}

export default Premium