import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {
      characters.map((character, index) => {
         return <Card
         key={index}
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })
      }
   </div>;
}
