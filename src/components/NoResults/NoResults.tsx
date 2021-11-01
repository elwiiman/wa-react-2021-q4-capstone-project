import Container from '../Common/Container';
import Title from '../Title';
import { Message, NoResultsContainer } from './styled';

const NoResults = () => {
    return (
        <Container colorType="paper" noPaddingBottom noPaddingTop>
            <NoResultsContainer>
                <div>
                    <Title text="Sorry :(" />
                </div>

                <Message>We couln't found results for your search</Message>
            </NoResultsContainer>
        </Container>
    );
};

export default NoResults;
