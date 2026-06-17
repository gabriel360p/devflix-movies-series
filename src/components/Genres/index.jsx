import { Genres, Container } from './styles'

export const SpanGenres = ({ genres }) => {
    return (
        <Container>
            {
                genres?.map(genre => (
                    <Genres key={genre.id}>{genre.name}</Genres>
                ))
            }
        </Container>
    )
}