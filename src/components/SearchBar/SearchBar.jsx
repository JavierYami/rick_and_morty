import { useState } from "react";

import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')

   const handleOnChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div className={style.srb}>
         <input type='search' value={character} onChange={handleOnChange} />
      <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
