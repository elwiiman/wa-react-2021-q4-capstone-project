import { StyledButton } from './styled';

export interface ActionButtonProps {
    label: string;
    onClick: () => {};
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const ActionButton = ({
    label,
    disabled,
    color,
    type = 'button',
    onClick,
}: ActionButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            color={color}
            type={type}
        >
            {label}
        </StyledButton>
    );
};

export default ActionButton;
