import SearchBar from '../SearchBar/SearchBar'
import style from '../Nav/Nav.module.css'

export default function Nav(props){
    return(
        <nav className={style.nav}>
            <SearchBar></SearchBar>
        </nav>
    )
}



