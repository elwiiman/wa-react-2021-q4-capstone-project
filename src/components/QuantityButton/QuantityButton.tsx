import React, { useState, useEffect } from 'react';
import { StyledDivButtonContainer, StyledButton, StyledInput } from './styled';
import PlusSymbol from '../Icons/PlusSymbol';
import MinusSymbol from '../Icons/MinusSymbol';
import { debounce, throttle } from '../../utils/Performance/forFunctions';

interface statusWindowMessage {
    type: string;
    message: string;
}

export interface QuantityButtonProps {
    /**
     * Showed number in the UI control
     */
    quantity: number | string;

    /**
     * The top value, the UI control is going to show
     */
    maxQuantity: number;

    /**
     * windows status handler
     */
    onErrorHappen: (message: statusWindowMessage) => void;

    /**
     * onQuantityChange handler, this function is intented to update cart product quantity
     */
    onQuantityChange: (quantity: number) => void;
}

const QuantityButton = (props: QuantityButtonProps) => {
    const {
        quantity = 1,
        maxQuantity = 1,
        onQuantityChange,
        onErrorHappen,
    } = props;

    const minQuantity = 1;

    //STATE
    const [selectedQuantity, setSelectedQuantity] = useState(quantity);
    const [maximumQuantity, setMaximumQuantity] = useState(maxQuantity);

    const isLessThanMaximumQuantity = selectedQuantity < maximumQuantity;

    //USE EFFECT
    useEffect(() => {
        const newMaximumQuantity =
            maxQuantity < minQuantity ? minQuantity : maxQuantity;

        setMaximumQuantity(newMaximumQuantity);
    }, [maxQuantity]);

    //USE EFFECT
    useEffect(() => {
        setSelectedQuantity(quantity);
        if (quantity < minQuantity) {
            setSelectedQuantity(minQuantity);
            if (onErrorHappen) {
                onErrorHappen({
                    type: 'error',
                    message: 'La cantidad mínima por producto es 1.',
                });
            }
        }

        if (quantity > maxQuantity) {
            setSelectedQuantity(maxQuantity);
            if (onErrorHappen) {
                onErrorHappen({
                    type: 'error',
                    message: `La cantidad máxima de este producto es ${maxQuantity}.`,
                });
            }
        }
        // eslint-disable-next-line
    }, [quantity]);

    //FUNCTIONS TO HANDLE EVENTS
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const { dataset } = e.target as HTMLButtonElement;
        const { name } = dataset;

        //with the symbol + as prefix, we obligate to transform a string into number, handling different edge cases like empty string "" or 00002
        let newQuantity = +selectedQuantity;

        switch (name) {
            case 'plus':
                if (isLessThanMaximumQuantity) {
                    newQuantity = newQuantity + 1;
                } else {
                    if (onErrorHappen) {
                        onErrorHappen({
                            type: 'error',
                            message: `La cantidad máxima de este producto es ${maximumQuantity}.`,
                        });
                    }
                }

                break;
            case 'minus':
                if (selectedQuantity !== minQuantity) {
                    newQuantity = newQuantity - 1;
                } else {
                    if (onErrorHappen) {
                        onErrorHappen({
                            type: 'error',
                            message: 'La cantidad mínima por producto es 1.',
                        });
                    }
                }
                break;
            default:
        }

        setSelectedQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // e.preventDefault();

        //obtainaing the value from the input
        const { value } = e.target as HTMLInputElement;

        //prevent not digit input
        //with the symbol + as prefix, we obligate to transform a string into number, handling different edge cases like empty string "" or 00002
        const quantity = +value.replace(/\D/g, '');

        //updating state
        setSelectedQuantity(quantity);

        if (quantity <= maximumQuantity && quantity >= minQuantity) {
            onQuantityChange(quantity);
        }
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        let message = '';
        //obtainaing the value from the input
        //with the symbol + as prefix, we obligate to transform a string into number, handling different edge cases like empty string "" or 00002
        const quantity: number = +e.target.value;
        const isAboveMaximum = quantity > maximumQuantity;

        if (quantity === 0 || isAboveMaximum) {
            //Change message if is the case
            if (quantity === 0) {
                message = 'La cantidad mínima por producto es 1.';
            }

            if (isAboveMaximum) {
                message = `Por favor, elige una cantidad menor a ${maximumQuantity}.`;
            }

            //updating state
            setSelectedQuantity(minQuantity);
            onQuantityChange(minQuantity);

            //Send error message
            if (onErrorHappen) {
                onErrorHappen({
                    type: 'error',
                    message,
                });
            }
        }
    };

    return (
        <StyledDivButtonContainer>
            <StyledButton
                data-name="minus"
                id="minus"
                onClick={debounce(handleClick)}
            >
                <MinusSymbol
                    onClick={debounce(handleClick)}
                    inStock={selectedQuantity > minQuantity}
                />
            </StyledButton>
            <StyledInput
                name="selectedQuantity"
                value={selectedQuantity}
                onChange={throttle(handleChange, 200)}
                placeholder="1"
                onBlur={debounce(handleOnBlur)}
            />
            <StyledButton
                data-name="plus"
                id="plus"
                onClick={debounce(handleClick)}
            >
                <PlusSymbol
                    onClick={debounce(handleClick)}
                    inStock={isLessThanMaximumQuantity}
                />
            </StyledButton>
        </StyledDivButtonContainer>
    );
};

export default QuantityButton;
