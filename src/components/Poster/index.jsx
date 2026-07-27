
import setupImgPath from '../../utils/getImages'
import { CarrouselPoster, CarrouselImagePoster, PosterTitle } from './styles.js'
import { Link } from 'react-router-dom';
export const CarrouselCardPoster = ({ info }) => {
    return (

        <CarrouselPoster as={Link} to={`/detalhes/${info.media_type === 'tv' || info.first_air_date ? 'tv' : 'movie'}/${info.id}`}>
            <CarrouselImagePoster src={setupImgPath(
                info.poster_path || info.profile_path || ''
            )} alt={info.title || info.name} />
            <PosterTitle>{info.title || info.name || ''}</PosterTitle>
        </CarrouselPoster>
    )
}
