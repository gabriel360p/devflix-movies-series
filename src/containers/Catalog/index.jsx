import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Carrousel } from '../../components/Carrousel';
import { Modal } from '../../components/Modal';
import setupImgPath from '../../utils/getImages';
import { getContentByGenre, getFeaturedContent } from '../../services/getData';
import { Background, Content, Hero, Poster, ButtonGroup, Carrousels } from './styles';

export const Catalog = ({ contentType, categories, title }) => {
    const [featured, setFeatured] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCatalog() {
            const [featuredContent, ...genres] = await Promise.all([
                getFeaturedContent(contentType),
                ...categories.map(category => getContentByGenre(contentType, category.id))
            ]);
            setFeatured(featuredContent);
            setCategoryData(genres);
        }

        loadCatalog();
    }, [categories, contentType]);

    return (
        <>
            {featured && (
                <Background $image={setupImgPath(featured.backdrop_path)}>
                    {isTrailerOpen && <Modal movieId={featured.id} contentType={contentType} modalState={setIsTrailerOpen} />}
                    <Hero>
                        <Content>
                            <p className="eyebrow">{title}</p>
                            <h1>{featured.title || featured.name}</h1>
                            <p>{featured.overview}</p>
                            <ButtonGroup>
                                <Button type onClick={() => navigate(`/detalhes/${contentType}/${featured.id}`)}>Assistir agora</Button>
                                <Button type={false} onClick={() => setIsTrailerOpen(true)}>Ver trailer</Button>
                            </ButtonGroup>
                        </Content>
                        <Poster>
                            <img src={setupImgPath(featured.poster_path)} alt={`Capa de ${featured.title || featured.name}`} />
                        </Poster>
                    </Hero>
                </Background>
            )}
            <Carrousels>
                {categories.map((category, index) => categoryData[index] && (
                    <Carrousel key={category.id} carrouselTitle={category.name} data={categoryData[index]} />
                ))}
            </Carrousels>
        </>
    );
};
