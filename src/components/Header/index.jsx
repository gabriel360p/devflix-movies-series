
import { useState } from "react";
import DevFlixLogo from "../../assets/logo.png"
import { Logo, NavBar, RouterLink } from './styles'
import { useLocation } from "react-router-dom"

export const Nav = () => {
    const { pathname } = useLocation();
    const [changeBackground, setChangeBackground] = useState(false)

    window.onscroll = () => {
        if (window.pageYOffset > 150) {
            setChangeBackground(true)
        } else {
            setChangeBackground(false)
        }
    }

    return (
        <NavBar $scrollPosition={changeBackground}>
            <Logo src={DevFlixLogo} alt="devflix-logo" />
            <ol>
                {/* Se na minha barra de navegação tiver a rota, ele retorna um true */}
                <li><RouterLink $isActive={pathname === '/'} to="/">Home</RouterLink></li>
                <li><RouterLink $isActive={pathname.includes('/filmes')} to="/filmes">Filmes</RouterLink></li>
                <li><RouterLink $isActive={pathname.includes('/series')} to="/series">Séries</RouterLink></li>
            </ol>
        </NavBar>
    )
}