/* eslint-disable prettier/prettier */

import React, { Component} from 'react';
import {  Button } from 'react-native';

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
//import { withNavigation } from "@react-navigation/native";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
        searchingRecipe:"",
        recipeList: [
        {type: 'Chuletas de cerdo en salsa de cerveza'}, {type: 'Arroz a la cerveza'},
        {type: 'Torta de Cerveza'}, {type: 'Aros de Cebolla'}],
        data:[]

    };
}


findRecipe(searchingRecipe) {
  //method called everytime when we change the value of the input
  if (searchingRecipe === '') {
    //if the query is null then return blank
    return [];
  }
  const { recipeList} = this.state;
  //making a case insensitive regular expression to get similar value from the film json
  const regex = new RegExp(`${searchingRecipe.trim()}`, 'i');
  //return the filtered film array according the query from the input
  return recipeList.filter(recipe=> recipe.type.search(regex) >= 0);
}




  render(){

    const { searchingRecipe} = this.state;
    const recipeList= this.findRecipe(searchingRecipe);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return(
      
    <>
<View style={styles.container}>
  
    <Autocomplete
                style={{marginTop:20,borderRadius:20,borderColor:Colors.black, width:900}}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.autocompleteContainer}
                //data to show in suggestion
                data={recipeList.length === 1 && comp(searchingRecipe, recipeList[0].type) ? [] : recipeList}
                //default value if you want to set something in input
                defaultValue={searchingRecipe}
                /*onchange of the text changing the state of the query which will trigger
                the findFilm method to show the suggestions*/
                onChangeText={text => this.setState({ searchingRecipe: text })}
                placeholder="Busca tu receta"
                renderItem={({ item }) => (
                  //you can change the view you want to show in suggestion from here
                  <TouchableOpacity onPress={() => this.setState({ searchingRecipe: item.type })}>
                    <Text style={styles.itemText}>
                      {item.type} 
                    </Text>
                  </TouchableOpacity>
                )}
              />

  
</View>
    

    </>
        


      
      

    )
  }
}

export default Search