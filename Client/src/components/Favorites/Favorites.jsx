import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';

export default function Favorites({ onClose }) {

    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);

    const handleOrder = event => {
        dispatch(orderCards(event.target.value));
       }
    const handleFilter = event => {
        dispatch(filterCards(event.target.value));
       }

   const cardComponents = myFavorites.map((character) => (
      <Card
        key = {character.id}
        id = {character.id}
        name = {character.name}
        status = {character.status}
        species = {character.species}
        gender = {character.gender}
        origin = {character.status}
        image = {character.image}
        onClose = {onClose}
      />
    ));
   return (
        <div>
            <select name="order" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            {cardComponents}
        </div>);
}