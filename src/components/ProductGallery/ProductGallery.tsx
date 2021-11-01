import { useState, useEffect } from 'react';
import {
    GalleryContainer,
    GalleryPhotoContainer,
    GalleryPhoto,
    PhotoCarrousel,
    SmallPhoto,
} from './styled';
import { ResultsEntity as Product, Image } from '../../types/productById';

interface ProductGalleryProps {
    product: Product;
}

const ProductGallery = ({ product: { data } }: ProductGalleryProps) => {
    const { images = [] } = data;

    const [currentPhoto, setCurrenPhoto] = useState<Image>({
        dimensions: { width: 0, height: 0 },
        alt: '',
        copyright: '',
        url: '',
    });

    const [intro, setIntro = useState] = useState(true);

    useEffect(() => {
        if (images.length > 0) {
            setCurrenPhoto(images[0].image);
        }
    }, []);

    const choosePhoto = (photo: Image) => {
        setCurrenPhoto(photo);
    };

    return (
        <GalleryContainer>
            <GalleryPhotoContainer>
                <GalleryPhoto
                    src={currentPhoto.url}
                    alt="product"
                    onAnimationEnd={() => {
                        setIntro(false);
                    }}
                    intro={intro}
                />
            </GalleryPhotoContainer>

            <PhotoCarrousel>
                {images.map(({ image }) => (
                    <SmallPhoto
                        loading="lazy"
                        src={image.url}
                        alt="product-item"
                        onClick={() => {
                            choosePhoto(image);
                            setIntro(true);
                        }}
                        selected={currentPhoto.url === image.url}
                    />
                ))}
            </PhotoCarrousel>
        </GalleryContainer>
    );
};

export default ProductGallery;
