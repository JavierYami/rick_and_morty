import SearchBar from '../SearchBar/SearchBar'
import style from '../Nav/Nav.module.css'
import { Link } from 'react-router-dom'
export default function Nav({onSearch}){
    return(
        <nav className={style.nav}>
            <div className={style.div}>
            <Link to='about'><button className={style.btn}>ABOUT</button></Link>
            <Link to='home'><button className={style.btn}>HOME</button></Link>
            </div>
            <SearchBar onSearch={onSearch}></SearchBar>
        </nav>
    )
}



