import Container from '../Common/Container';
import Title from '../Title';
import { Message, NoResultsContainer } from './styled';

const reasons = {
    noResultsInSearch: {
        title: 'Sorry :(',
        message: "We couln't found results for your search",
    },

    noProductsInCart: {
        title: 'Ups!',
        message: 'There is nothing in your cart yet. Please add some products',
    },
};

export interface NoResultsProps {
    reason: 'noResultsInSearch' | 'noProductsInCart';
}

const NoResults = ({ reason }: NoResultsProps) => {
    return (
        <Container colorType="paper" noPaddingBottom noPaddingTop>
            <NoResultsContainer>
                <div>
                    <Title text={reasons[reason].title} />
                </div>

                <Message>{reasons[reason].message}</Message>
            </NoResultsContainer>
        </Container>
    );
};

export default NoResults;
