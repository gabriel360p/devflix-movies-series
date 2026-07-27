import { Catalog } from '../Catalog';

const categories = [
    { id: 28, name: 'Filmes de acao' },
    { id: 27, name: 'Filmes de terror' },
    { id: 12, name: 'Filmes de aventura' },
    { id: 10749, name: 'Filmes de romance' },
    { id: 35, name: 'Filmes de comedia' },
];

const Movies = () => <Catalog contentType="movie" title="Filmes em destaque" categories={categories} />;

export default Movies;
