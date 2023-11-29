import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Card.css'

export default function Card(props) {

   const dispatch = useDispatch();
   const [ isFav, setIsFav ] = useState(false);
   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(props.id));
      }
      else if (isFav === false) {
         setIsFav(true);
         dispatch(addFav(props));
      }
   };

   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className="card-container">
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h4>Status: {props.status}</h4>
         <h4>Species: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <img src={props.image} alt={props.id} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => {
         dispatch(addFav());
      },
      removeFav: () => {
         dispatch(removeFav());
      }
   }
};

connect(mapStateToProps, mapDispatchToProps)(Card);