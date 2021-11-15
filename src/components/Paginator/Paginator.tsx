import { usePagination } from '../../hooks/usePagination';
import { PaginatorContainer, PaginatorItem, Arrow } from './styled';
const DOTS = '...';

interface PaginatorProps {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    siblingCount?: number;
    onPageChange: (page: number) => void;
}

const Paginator = ({
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 1,
    onPageChange,
}: PaginatorProps) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <PaginatorContainer>
            {/* Left navigation arrow */}
            <PaginatorItem
                onClick={onPrevious}
                disabled={currentPage === 1}
                data-testid="left-arrow"
            >
                <Arrow side="left" disabled={currentPage === 1} />
            </PaginatorItem>
            {paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li key={index}>&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <PaginatorItem
                        key={index}
                        onClick={() => onPageChange(Number(pageNumber))}
                        selected={Number(pageNumber) === currentPage}
                        data-testid={`page-${index}`}
                    >
                        {pageNumber}
                    </PaginatorItem>
                );
            })}
            {/*  Right Navigation arrow */}
            <PaginatorItem
                onClick={onNext}
                disabled={currentPage === Number(lastPage)}
                data-testid="right-arrow"
            >
                <Arrow
                    side="right"
                    disabled={currentPage === Number(lastPage)}
                />
            </PaginatorItem>
        </PaginatorContainer>
    );
};

export default Paginator;
