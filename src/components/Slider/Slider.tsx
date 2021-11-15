import { Swiper, SwiperSlide } from 'swiper/react';
import { ResultsEntity } from '../../types/featuredBanners';
import { StyledImage, SliderContainer, Description } from './styled';
import { takefirstCharacters } from '../../helpers/stringHelpers';

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
                {slides.map((slide, index) => {
                    //trim the description text if is > 40 characters length
                    let textDescription = slide.data.description[0].text;
                    textDescription =
                        textDescription.length > 40
                            ? `${takefirstCharacters(textDescription, 40)}...`
                            : textDescription;

                    return (
                        <SwiperSlide key={slide.id}>
                            <StyledImage
                                src={slide.data.main_image.url}
                                alt={slide.data.main_image.alt}
                                data-testid={`featured-banner-img-${index}`}
                            />

                            <Description>{textDescription}</Description>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SliderContainer>
    );
};

export default Slider;
