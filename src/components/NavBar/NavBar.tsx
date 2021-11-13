import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../config/app/hooks';
import { toggleTheme } from '../../features/themeSlice';
import { selectTotalProductsInCart } from '../../features/cartSlice';
import CartStatus from '../CartStatus';
import Logo from '../Logo';
import Input from '../Common/Input';
import SearchIcon from '../Icons/Search';
import Sun from '../Icons/Sun';
import Moon from '../Icons/Moon';
import SimpleButton from '../SimpleButton';
import useInput from '../../hooks/useInput';

import {
    StyledNav,
    StyledForm,
    LogoContainer,
    MainContainer,
    CartContainer,
    CartContainerMobile,
} from './styled';
interface NavBarProps {
    doSearch: Function;
}

const NavBar: FunctionComponent<NavBarProps> = ({ doSearch }) => {
    const search = useInput('');
    const dispatch = useAppDispatch();
    const isDarkTheme = useAppSelector((state) => state.theme.dark);
    const numberOfProducts = useAppSelector(selectTotalProductsInCart);

    const submitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        doSearch(search.value);
        search.setValue('');
    };

    return (
        <StyledNav>
            <MainContainer>
                <Link to="/">
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                </Link>

                <CartContainerMobile>
                    {isDarkTheme ? (
                        <SimpleButton
                            label={<Sun />}
                            onClick={() => {
                                dispatch(toggleTheme());
                            }}
                        />
                    ) : (
                        <SimpleButton
                            label={<Moon />}
                            onClick={() => {
                                dispatch(toggleTheme());
                            }}
                        />
                    )}

                    <div>
                        <CartStatus totalCount={numberOfProducts} />
                    </div>
                </CartContainerMobile>
            </MainContainer>

            <StyledForm onSubmit={submitSearch}>
                <Input {...search} />
                <SimpleButton
                    style={{ width: '45px' }}
                    label={<SearchIcon />}
                    onClick={submitSearch}
                    enablePaperBackground
                />
            </StyledForm>

            <CartContainer>
                {isDarkTheme ? (
                    <SimpleButton
                        label={<Sun />}
                        onClick={() => {
                            dispatch(toggleTheme());
                        }}
                    />
                ) : (
                    <SimpleButton
                        label={<Moon />}
                        onClick={() => {
                            dispatch(toggleTheme());
                        }}
                    />
                )}
                <div>
                    <CartStatus totalCount={numberOfProducts} />
                </div>
            </CartContainer>
        </StyledNav>
    );
};

export default NavBar;
