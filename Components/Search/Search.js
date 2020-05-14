/* eslint-disable prettier/prettier */

import React, { Component} from 'react';
import {  Alert } from 'react-native';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import styles from "./SearchStyle"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Item from'../Home/Item'


const recipes = [
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje1.png', name: 'Papas fritas con queso y tocineta', id: '11' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje2.png', name: 'Burritos de carne y camarones', id: '12' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje3.png', name: 'Pizza napolitana', id: '13' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje4.png', name: 'Rollos de langosta', id: '14' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje5.png', name: 'Sushi roll', id: '15' },
]
const beers = [
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza1.png', name: 'Estrella Damm', id: '1' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza2.png', name: 'Marantá', id: '2' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza3.png', name: 'Becks', id: '3' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza4.png', name: 'Bitburger', id: '4' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza5.png', name: 'Maredsous', id: '5' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza6.png', name: 'Erdinger', id: '6' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza7.png', name: '3 Cordilleras', id: '7' }]

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
        searchingBeer:"",
        searchingRecipe:"",
        recipeList: [],
        beerList:[]
        
    };
}

recipeNBeerFetch=()=>{
  this.setState({
    recipeList:recipes,
    beerList:beers
  })
  console.log(this.state)
}
componentDidMount(){
  this.recipeNBeerFetch();
}

findRecipe(searchingItem,list) {
  //method called everytime when we change the value of the input
  if (searchingItem === '') {
    //if the query is null then return blank
    return [];
  }
  const regex = new RegExp(`${searchingItem.trim()}`, 'i');
  if(list===1){
    const { recipeList} = this.state;
   
  return recipeList.filter(recipe=> recipe.name.search(regex) >= 0);
  }else{
    const {beerList}=this.state
  return beerList.filter(beer=> beer.name.search(regex) >= 0);
  }
  
  
}

onPress=(name)=>{
  Alert.alert("Nombre del producto",
                  name,
                  [
                 
                    { text: "Comprar", onPress: () => console.log("Would purchase") }
                  ],
                  { cancelable: false }
      );
}


  render(){

    const { searchingRecipe} = this.state;
    const recipeList= this.findRecipe(searchingRecipe,1);
    const{searchingBeer}=this.state
    const beerList=this.findRecipe(searchingBeer,2)
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return(
      
    <>


<Text style={styles.titleText}>ZONA DE BUSQUEDAS</Text>
<ScrollView>
<View style={styles.container}>
  <Text style={styles.titleText}>NUESTRAS RECETAS</Text>
    <Autocomplete
                style={{marginTop:20,borderRadius:20,borderColor:Colors.black,flexDirection:"row",flexWrap:"wrap"}}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.autocompleteContainer}
                //data to show in suggestion
                data={recipeList.length === 1 && comp(searchingRecipe, recipeList[0].name) ? [] : recipeList}
                //default value if you want to set something in input
                defaultValue={searchingRecipe}
                /*onchange of the text changing the state of the query which will trigger
                the findFilm method to show the suggestions*/
                onChangeText={text => this.setState({ searchingRecipe: text })}
                placeholder="Busca tu receta"
               
                  //you can change the view you want to show in suggestion from 
                 renderItem={({ item }) => (
                  
                
                      <TouchableOpacity >
                        <Item
                          id={item.id}
                          img={item.img}
                            />
                    </TouchableOpacity>
                            )}/>

</View>

<View style={styles.container}>
  <Text style={styles.titleText}> TUS CERVEZAS FAVORITAS</Text>
      <Autocomplete
                style={{marginTop:20,borderRadius:20,borderColor:Colors.black,flexDirection:"row",flexWrap:"wrap"}}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.autocompleteContainer}
                //data to show in suggestion
                data={beerList.length === 1 && comp(searchingBeer, beerList[0].name) ? [] : beerList}
                //default value if you want to set something in input
                defaultValue={searchingBeer}
                /*onchange of the text changing the state of the query which will trigger
                the findFilm method to show the suggestions*/
                onChangeText={text => this.setState({ searchingBeer: text })}
                placeholder="Busca tu receta"
               
                  //you can change the view you want to show in suggestion from 
                 renderItem={({ item }) => (
                  
                
                      <TouchableOpacity onPress={()=>this.onPress(item.name)}>
                        <Item
                          id={item.id}
                          img={item.img}
                            />
                    </TouchableOpacity>
                            )}/>  
  
  
</View>    
</ScrollView>


    </>
        


      
      

    )
  }
}

export default Search