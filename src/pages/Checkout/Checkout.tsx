import ContactForm from '../../components/ConctactForm';
import ConfirmedProduct from '../../components/ConfirmedProduct';
import ActionButton from '../../components/ActionButton';
import initialValues from '../../components/ConctactForm/initialValues';
import validationSchema from '../../components/ConctactForm/validationSchema';
import { useAppSelector } from '../../config/app/hooks';
import { selectTotalAmount } from '../../features/cartSlice';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import {
    OverallContainer,
    HeadOfSection,
    FormContainer,
    RightWrapper,
    ConfirmedProductContainer,
    ConfirmedProductsContainer,
    ButtonsContainer,
    ButtonGoBackContainer,
} from './styled';

const Checkout = () => {
    const cartProducts = useAppSelector((state) => state.cart.products);
    const grandTotal = useAppSelector(selectTotalAmount);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log('values', values)}
            isInitialValid={false}
        >
            {({ handleSubmit, isValid }) => {
                return (
                    <OverallContainer>
                        <FormContainer>
                            <HeadOfSection>Contact information</HeadOfSection>
                            <ContactForm />
                        </FormContainer>
                        <RightWrapper>
                            <HeadOfSection marginLeft="1em">
                                Your products
                            </HeadOfSection>
                            <ConfirmedProductsContainer>
                                {cartProducts.map((product) => (
                                    <ConfirmedProductContainer>
                                        <ConfirmedProduct product={product} />
                                    </ConfirmedProductContainer>
                                ))}
                            </ConfirmedProductsContainer>

                            <ButtonsContainer>
                                <ActionButton
                                    color="secondary"
                                    label={`Place Order | $ ${Number(
                                        grandTotal
                                    ).toFixed(2)}`}
                                    onClick={() => {
                                        handleSubmit();
                                    }}
                                    disabled={!isValid}
                                />
                                <ButtonGoBackContainer>
                                    <Link to="/cart">
                                        <ActionButton
                                            color="primary"
                                            label="Go back to cart"
                                            onClick={() => false}
                                        />
                                    </Link>
                                </ButtonGoBackContainer>
                            </ButtonsContainer>
                        </RightWrapper>
                    </OverallContainer>
                );
            }}
        </Formik>
    );
};

export default Checkout;
