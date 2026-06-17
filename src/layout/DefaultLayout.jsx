import { Nav } from "../components/Header";
import { Outlet } from "react-router-dom";

/* 
    Essa é uma maneira de criar layouts padrão para por exemplo abrigar a barra de navegação, sidebars e footers
    e entre outras coisas que vc deseja que se repita em todas as telas.

    Aqui basicamente estamos montando uma estrutura padrão, aonde queremos que, a nav bar sempre seja carregada
    acima dos outros containers que serão injetados através da tag <Outlet/>
*/

const DefaultLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}
export default DefaultLayout;