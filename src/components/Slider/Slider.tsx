import { Swiper, SwiperSlide } from 'swiper/react';
import { ResultsEntity } from '../../types/featuredBanners';
import { StyledImage, SliderContainer, Description } from './styled';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

interface SliderProps {
    /**
     * An array of featured banners
     */
    slides: ResultsEntity[];
}

/**
 * Slider to show featured banners, each slide shows each 3.5secs
 */

const Slider = ({ slides }: SliderProps) => {
    return (
        <SliderContainer>
            <Swiper
                spaceBetween={5}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <StyledImage
                            src={slide.data.main_image.url}
                            alt={slide.data.main_image.alt}
                        />

                        <Description>
                            {slide.data.description[0].text}
                        </Description>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderContainer>
    );
};

export default Slider;
