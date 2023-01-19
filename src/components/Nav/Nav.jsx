import SearchBar from '../SearchBar/SearchBar'
import style from '../Nav/Nav.module.css'

export default function Nav({onSearch}){
    return(
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}></SearchBar>
        </nav>
    )
}



