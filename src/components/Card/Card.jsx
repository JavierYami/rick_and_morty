import style from '../Card/Card.module.css'

export default function Card(props) {
   return (
      <div className={style.div}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="personaje" />
      </div>
   );
}
