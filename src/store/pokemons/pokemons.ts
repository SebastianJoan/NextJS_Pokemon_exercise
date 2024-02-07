import { createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';
 

interface PokemonsState {
  [key: string]: SimplePokemon
} 


const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur' },
  '3': { id: '3', name: 'venusaur' },
  '5': { id: '5', name: 'Charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: { 
  }
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;