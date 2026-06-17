
import setupImgPath from '../../utils/getImages'
import { CarrouselPoster, CarrouselImagePoster, PosterTitle } from './styles.js'
export const CarrouselCardPoster = ({ info }) => {
    return (

        <CarrouselPoster>
            <CarrouselImagePoster src={setupImgPath(
                info.poster_path || info.profile_path || ''
            )} alt={info.title || info.name} />
            <PosterTitle>{info.title || info.name || ''}</PosterTitle>
        </CarrouselPoster>
    )
}