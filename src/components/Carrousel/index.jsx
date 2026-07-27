// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, CarrouselMainTitle } from './styles';
import { Autoplay } from 'swiper/modules';
import { CarrouselCardPoster } from '../Poster';

export const Carrousel = ({ ...props }) => {
    const [mainArray, setMainArray] = useState([]);

    useEffect(() => {
        function loadCarrouselItems() {

            setMainArray(props.data.results)
        }
        loadCarrouselItems()
    }, [props.data.results])


    return (
        <>
            <CarrouselMainTitle>{props.carrouselTitle}</CarrouselMainTitle>

            <Container>
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    autoplay={true}
                    spaceBetween={10}
                    slidesPerView={6}
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 12 },
                        480: { slidesPerView: 3, spaceBetween: 12 },
                        768: { slidesPerView: 4, spaceBetween: 14 },
                        1024: { slidesPerView: 5, spaceBetween: 16 },
                        1280: { slidesPerView: 6, spaceBetween: 18 },
                    }}
                >
                    {
                        mainArray?.map(topContent => (
                            <SwiperSlide key={topContent.id}>
                                <CarrouselCardPoster info={topContent} />
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </Container >
        </>
    );
};
