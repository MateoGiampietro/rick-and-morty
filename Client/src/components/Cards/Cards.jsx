import Card from '../Card/Card';

export default function Cards({characters, onClose}) {

   const cardComponents = characters.map((character) => (
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
   return (<div>{cardComponents}</div>);
}