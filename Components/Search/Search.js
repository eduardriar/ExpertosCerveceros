/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from './node_modules/react';
import {
  Dimensions, Alert, Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Autocomplete from './node_modules/react-native-autocomplete-input';
import styles from './SearchStyle';
import Item from '../Home/Item';
import { recetas } from '../Home/RecetasText';
import { beers } from '../Home/BeerText';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchingBeer: '',
      searchingRecipe: '',
      recipeList: [],
      beerList: [],
    };
  }

  recipeNBeerFetch = () => {
    this.setState({
      recipeList: recetas,
      beerList: beers,
    });
  }

  UNSAFE_componentDidMount() {
    this.recipeNBeerFetch();
  }

  findRecipe(searchingItem, list) {
    //method called everytime when we change the value of the input
    if (searchingItem === '') {
      //if the query is null then return blank
      return [];
    }
    const regex = new RegExp(`${searchingItem.trim()}`, 'i');
    if (list === 1) {
      const { recipeList } = this.state;

      return recipeList.filter(recipe => recipe.title.search(regex) >= 0);
    } else {
      const { beerList } = this.state;
      return beerList.filter(beer => beer.title.search(regex) >= 0);
    }
  }

  onPress = (name) => {
    Alert.alert('Nombre del producto',
      name,
      [
        { text: 'Comprar', onPress: () => console.log('Would purchase') },
      ],
      { cancelable: false }
    );
  }


  render() {
    const { searchingRecipe } = this.state;
    const recipeList = this.findRecipe(searchingRecipe, 1);
    const { searchingBeer } = this.state;
    const beerList = this.findRecipe(searchingBeer, 2);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
        <View style={{ backgroundColor: '#574F7D', height: HEIGHT}}>
          <Text style={styles.title}>Buscar</Text>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.titleText}>NUESTRAS RECETAS</Text>
              <Autocomplete
                horizontal={true}
                style={styles.containerAutoComplete}
                inputContainerStyle={styles.inputContainerStyle}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.autocompleteContainer}
                //data to show in suggestion
                data={recipeList.length === 1 && comp(searchingRecipe, recipeList[0].title) ? [] : recipeList}
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
                      object={item}
                    />
                  </TouchableOpacity>
                )} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titleText}>Nuestras Cervezas</Text>
              <Autocomplete
                horizontal={true}
                style={styles.containerAutoComplete}
                inputContainerStyle={styles.inputContainerStyle}
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={styles.autocompleteContainer}
                //data to show in suggestion
                data={beerList.length === 1 && comp(searchingBeer, beerList[0].title) ? [] : beerList}
                //default value if you want to set something in input
                defaultValue={searchingBeer}
                /*onchange of the text changing the state of the query which will trigger
                the findFilm method to show the suggestions*/
                onChangeText={text => this.setState({ searchingBeer: text })}
                placeholder="Busca tu Cerveza"
                //you can change the view you want to show in suggestion from
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.onPress(item.title)}>
                    <Item
                      object={item}
                    />
                  </TouchableOpacity>
                )} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titleText}>Nuestras Recomendados</Text>
              <ScrollView horizontal={true}>
                {recetas.map((item,index) => <Item object={item} nav={this.props} to={'Receipt'} key={index}/>)}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
    );
  }
}

export default Search;