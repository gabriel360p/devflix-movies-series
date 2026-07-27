import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/movies";
import Series from "../containers/series";
import Detail from "../containers/Detail";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {
    return (
        //Routes mais professionais, antes era muito simples, agora está mais robusta
        <Routes>
            {/* inserindo um layout padrão que  */}
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                {/* valores dinâmicos: */}
                <Route path="/detalhes/:id" element={<Detail />} />
                <Route path="/detalhes/:contentType/:id" element={<Detail />} />
            </Route>


        </Routes>
    )
}

export default Router;
