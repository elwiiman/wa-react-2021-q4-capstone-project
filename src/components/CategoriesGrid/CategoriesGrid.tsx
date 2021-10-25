import { ResultsEntity } from '../../types/productCategories';
import {
    GridWrapper,
    GridItem1,
    GridItem2,
    GridItem3,
    GridItem4,
    GridItem5,
    ImageContainer,
    TextImage,
    Image,
} from './styled';
import { shuffle } from '../../helpers/arraysHelpers';
export interface CategoriesGridProps {
    categories: ResultsEntity[];
}

interface GridTileProps {
    category: ResultsEntity;
}

const GridTile = ({ category }: GridTileProps) => {
    const {
        data: {
            name,
            main_image: { url, alt },
        },
    } = category;
    return (
        <ImageContainer>
            <Image src={url} alt={alt} />

            <TextImage>{name}</TextImage>
        </ImageContainer>
    );
};

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
    const selectAnItem = (index: number, category: ResultsEntity) => {
        switch (index) {
            case 0:
                return (
                    <GridItem1 key={category.id}>
                        <GridTile category={category} />
                    </GridItem1>
                );

            case 1:
                return (
                    <GridItem2 key={category.id}>
                        <GridTile category={category} />
                    </GridItem2>
                );

            case 2:
                return (
                    <GridItem3 key={category.id}>
                        <GridTile category={category} />
                    </GridItem3>
                );

            case 3:
                return (
                    <GridItem4 key={category.id}>
                        <GridTile category={category} />
                    </GridItem4>
                );

            case 4:
                return (
                    <GridItem5 key={category.id}>
                        <GridTile category={category} />
                    </GridItem5>
                );

            default:
                return null;
        }
    };
    return (
        <GridWrapper>
            {shuffle(categories).map((category, index) =>
                selectAnItem(index, category)
            )}
        </GridWrapper>
    );
};

export default CategoriesGrid;
