import setupImgPath from "../../utils/getImages.js"
import { Container, Title } from "./styles.js"

export const Credits = ({ credits }) => {
    return (
        <>
            <Title>Créditos</Title>
            {credits && (
                <Container>
                    {credits?.slice(0, 5).map(artist => (
                        <div key={artist.id}>
                            <img src={setupImgPath(artist.profile_path)} alt={artist.name} />
                            <p>{artist?.original_name}</p>
                        </div>
                    ))}

                    <div>
                    </div>
                </Container>

            )}
        </>
    )
}