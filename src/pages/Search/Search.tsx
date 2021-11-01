import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useSearchProductsQuery } from '../../services/api/apiSlice';
import { SearchedTerm, PaginatorContainer } from './styled';
import NoResults from '../../components/NoResults/NoResults';
import FeaturedProductsGrid from '../../components/FeaturedProductsGrid';
import Paginator from '../../components/Paginator';
import queryString from 'query-string';
import Container from '../../components/Common/Container';
import Spinner from '../../components/Spinner';

const Search = () => {
    const { search, pathname } = useLocation();
    const [page, setPage] = useState(1);
    const history = useHistory();

    let parsed = queryString.parse(search);

    const { data: searchData, isLoading } = useSearchProductsQuery({
        term: parsed.q ? parsed.q : '',
        page: page,
    });

    if (isLoading) {
        return (
            <Container colorType="paper" flexCenter style={{ height: '70vh' }}>
                <Spinner widthAndHeight="45px" />
            </Container>
        );
    }

    if (searchData) {
        if (
            searchData.results.length <= 0 ||
            parsed.q === '' ||
            parsed.q === undefined
        ) {
            return <NoResults />;
        }
        return (
            <Container colorType="paper" noPaddingBottom>
                <SearchedTerm>{`Results for "${parsed.q}" : `}</SearchedTerm>
                <FeaturedProductsGrid products={searchData.results} />
                <PaginatorContainer>
                    <Paginator
                        totalCount={searchData.total_results_size}
                        currentPage={page}
                        pageSize={searchData.results_per_page}
                        onPageChange={(newPage) => {
                            setPage(newPage);
                            history.push(`${pathname}?p=${newPage}`);
                        }}
                    />
                </PaginatorContainer>
            </Container>
        );
    } else return null;
};

export default Search;
