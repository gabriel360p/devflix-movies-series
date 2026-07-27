import { Catalog } from '../Catalog';

const categories = [
    { id: 10759, name: 'Series de acao e aventura' },
    { id: 18, name: 'Series de drama' },
    { id: 35, name: 'Series de comedia' },
    { id: 9648, name: 'Series de misterio' },
    { id: 10765, name: 'Series de ficcao cientifica e fantasia' },
];

const Series = () => <Catalog contentType="tv" title="Series em destaque" categories={categories} />;

export default Series;
