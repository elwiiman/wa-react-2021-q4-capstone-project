import styled from 'styled-components';

interface IContainer {
    colorType?: 'contrast' | 'main' | 'paper' | 'secondary' | 'secondary_opac';
    padding?: string;
}

export default styled.div<IContainer>`
    background-color: ${(props) => {
        const colorType = props.colorType ? props.colorType : 'main';
        return props.theme.background[`${colorType}`];
    }};

    padding: ${(props) => (props.padding ? props.padding : '1rem')};
`;
