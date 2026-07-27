import { useState } from "react"
import { Container, Background } from "./styles"
import { useEffect } from "react"
import getVideo from '../../utils/getVideo.js'
import { getContentVideos } from "../../services/getData.js";

export const Modal = ({ movieId, modalState, contentType = 'movie' }) => {

    const [movie, setMovie] = useState(null)
    const [movieKey, setMovieKey] = useState(null)

    useEffect(() => {

        async function apiLoader() {
            const videos = await getContentVideos(contentType, movieId);
            const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube') || videos[0];
            setMovie(trailer)
            setMovieKey(trailer?.key)
        } apiLoader()

    }, [contentType, movieId])

    return (
        // recebi a função vinda de home e daqui eu consigo acessar essa função! que daora
        <Background onClick={() => modalState(false)}>
            {movie && movieKey ?
                <Container>
                    <iframe
                        title="Youtube Video Player"
                        height='500px'
                        width='100%'
                        src={getVideo(movieKey)}
                    >

                    </iframe>
                </Container>
                : ''}
        </Background>

    )
}
