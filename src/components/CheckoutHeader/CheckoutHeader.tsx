import LockCard from '../Icons/LockCard';
import Sun from '../Icons/Sun';
import Moon from '../Icons/Moon';
import SimpleButton from '../SimpleButton';
import {
    LeftSideContainer,
    RightSideContainer,
    StyledSecureNav,
    IconContainer,
} from './styled';
import { useAppSelector, useAppDispatch } from '../../config/app/hooks';
import { toggleTheme } from '../../features/themeSlice';

const CheckoutHeader = () => {
    const isDarkTheme = useAppSelector((state) => state.theme.dark);
    const dispatch = useAppDispatch();
    return (
        <StyledSecureNav>
            <LeftSideContainer>
                <div>Secure Purchase</div>
                <IconContainer>
                    <LockCard />
                </IconContainer>
            </LeftSideContainer>

            <RightSideContainer>
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
            </RightSideContainer>
        </StyledSecureNav>
    );
};

export default CheckoutHeader;
