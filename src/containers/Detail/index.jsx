import { useEffect } from 'react';
import { Background, Container, Cover, Info, ContainerMovies } from './styles.js'
import { getMovieCredits, getMovieSimilar, getMovieById, getAllTrailer } from '../../services/getData.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import setupImgPath from '../../utils/getImages.js'
import { SpanGenres } from '../../components/Genres/index.jsx';
import { Credits } from '../../components/Credits/index.jsx';
import getVideo from '../../utils/getVideo.js'
import { Carrousel } from '../../components/Carrousel/index.jsx';

const Detail = () => {
    const [movie, setMovie] = useState()
    const [trailers, setTrailers] = useState([])
    const [movieCredits, setMovieCredits] = useState()

    const [movieSimilar, setMovieSimilar] = useState()
    const { id: paramsMovieId } = useParams();

    useEffect(() => {
        async function apiLoader() {
            setMovie(await getMovieById(paramsMovieId))
            setTrailers(await getAllTrailer(paramsMovieId))
            setMovieCredits(await getMovieCredits(paramsMovieId));
            setMovieSimilar(await getMovieSimilar(paramsMovieId));
        } apiLoader()
    }, [])
    return (
        <>
            <Background $image={setupImgPath(movie?.backdrop_path)} />
            <Container>
                <Cover>
                    <img src={setupImgPath(movie?.poster_path)} alt={setupImgPath(movie?.title)} />
                </Cover>
                <Info>
                    <h2>{movie?.title}</h2>
                    <SpanGenres genres={movie?.genres} />

                    <p>{movie?.overview}</p>
                    <div>
                        <Credits credits={movieCredits} />
                    </div>
                </Info>
            </Container>

            <ContainerMovies>
                {trailers?.map(trailer => (
                    <div key={trailer.id}>
                        <h4>{trailer.name}</h4>
                        <iframe
                            title="Youtube Video Player"
                            src={getVideo(trailer.key)}
                        >
                        </iframe>
                    </div>
                ))}
            </ContainerMovies>
            {movieSimilar &&
                <Carrousel carrouselTitle={"Filmes similares"} data={movieSimilar} />
            }
        </>
    )
}

export default Detail;