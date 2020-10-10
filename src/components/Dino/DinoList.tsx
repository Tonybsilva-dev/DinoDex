import React, { Component } from 'react';
import PokemonCard from './DinoCard';
import axios from 'axios';

export default class PokemonList extends Component{

  state = {
    url: '',
    dino: null
  }
  

   async componentDidMount(){
     const res = await axios.get(this.state.url);
     this.setState({pokemon: res.data['results']})
  }

  render(){
    return(
      
      <React.Fragment>
      {/* {this.state.dino ? (      
        <div className="row" >
        {this.state.dino.map((dino: any) => (
          <PokemonCard 
           key = {dino.name}
           name = {dino.name}
           url = {dino.url}
          />
        ))}
      </div>
      ) : (<h1>Loading DinoDex...</h1>)} */}
      </React.Fragment>
    )
  }
}