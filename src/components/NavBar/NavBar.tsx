import { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../config/app/hooks';
import { selectTotalProductsInCart } from '../../features/cartSlice';
import CartStatus from '../CartStatus';
import Logo from '../Logo';
import Input from '../Common/Input';
import CartIcon from '../Icons/Cart';
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

import { ThemeContext } from '../../context/ThemeProvider';

interface NavBarProps {
    doSearch: Function;
}

const NavBar: FunctionComponent<NavBarProps> = ({ doSearch }) => {
    const search = useInput('');
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const numberOfProducts = useAppSelector(selectTotalProductsInCart);

    const submitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        doSearch(search.value);
        search.setValue('');
    };

    console.log('numberOfProducts', numberOfProducts);

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
                                toggleTheme();
                            }}
                        />
                    ) : (
                        <SimpleButton
                            label={<Moon />}
                            onClick={() => {
                                toggleTheme();
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
                            toggleTheme();
                        }}
                    />
                ) : (
                    <SimpleButton
                        label={<Moon />}
                        onClick={() => {
                            toggleTheme();
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
