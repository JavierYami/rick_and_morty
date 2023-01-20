import SearchBar from '../SearchBar/SearchBar'
import style from '../Nav/Nav.module.css'
import { Link } from 'react-router-dom'
export default function Nav({onSearch}){
    return(
        <nav className={style.nav}>
            <Link to='about'><button>ABOUT</button></Link>
            <Link to='home'><button>HOME</button></Link>
            <SearchBar onSearch={onSearch}></SearchBar>
        </nav>
    )
}



