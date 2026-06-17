import { useState } from "react"
import { Container, Background } from "./styles"
import { useEffect } from "react"
import Api from "../../services/axios";
import getVideo from '../../utils/getVideo.js'
import { getTrailer } from "../../services/getData.js";

export const Modal = ({ movieId, modalState }) => {

    const [movie, setMovie] = useState(null)
    const [movieKey, setMovieKey] = useState(null)

    useEffect(() => {

        async function apiLoader() {
            const infos = await getTrailer(movieId)
            setMovie(infos[0])
            setMovieKey(infos[1])
        } apiLoader()

    }, [])

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