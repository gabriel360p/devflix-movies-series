import { useEffect, useState } from "react";
import { Background, Info, Poster, Container, ButtonGroup, CarrouselContainer } from "./styles";
import { Button } from '../../components/Button'
import { Carrousel } from "../../components/Carrousel";
import setupImgPath from "../../utils/getImages";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { getMovie, getMovies, getSeries, getActors } from "../../services/getData.js";

// https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg

const Home = () => {
    const [movie, setMovie] = useState(null)
    const [topMovies, setTopMovies] = useState([])
    const [topSeries, setTopSeries] = useState([])
    const [topActors, setTopActors] = useState([])

    const [isOpen, setIsOpen] = useState(null)

    const navigate = useNavigate();

    function modalState(open) {
        setIsOpen(open)
    }

    useEffect(() => {
        async function apiLoader() {
            setMovie(await getMovie())
            setTopMovies(await getMovies())
            setTopSeries(await getSeries())
            setTopActors(await getActors())

        } apiLoader()
    }, [])

    return (
        <>
            {
                movie && (

                    <Background img={setupImgPath(movie.backdrop_path)}>
                        {isOpen &&
                            (
                                //enviando a função que controla o state do modal
                                <Modal modalState={modalState} movieId={movie.id} />
                            )
                        }
                        <Container>
                            <Info>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>

                                <ButtonGroup>
                                    <Button onClick={() => navigate(`/detalhes/${movie.id}`)} type={true}>Assista Agora</Button>
                                    <Button onClick={() => modalState(true)} type={false}>Assista ao Trailer</Button>
                                </ButtonGroup>
                            </Info>
                            <Poster>
                                <img src={setupImgPath(movie.poster_path)} alt="capa-do-filme" />
                            </Poster>
                        </Container>
                    </Background >

                )
            }
            <CarrouselContainer>
                {
                    topMovies && (
                        <Carrousel carrouselTitle={'Top Movies'} data={topMovies} />
                    )
                }

                {
                    topSeries && (
                        <Carrousel carrouselTitle={'Top Séries'} data={topSeries} />
                    )
                }

                {
                    topActors && (
                        <Carrousel carrouselTitle={'Top Atores'} data={topActors} />
                    )
                }
            </CarrouselContainer>

        </>
    );
};

export default Home;
