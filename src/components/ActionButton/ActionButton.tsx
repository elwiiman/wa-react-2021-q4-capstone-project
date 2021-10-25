import React from 'react';
import { StyledButton } from './styled';

export interface ActionButtonProps {
    label: string | React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    type?: 'button' | 'submit' | 'reset' | undefined;
    padding?: string;
}

const ActionButton = ({
    label,
    disabled,
    color,
    type = 'button',
    onClick,
    padding,
}: ActionButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            color={color}
            type={type}
            padding={padding}
        >
            {label}
        </StyledButton>
    );
};

export default ActionButton;
