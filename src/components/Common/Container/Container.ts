import styled from 'styled-components';

interface IContainer {
    colorType?: 'contrast' | 'main' | 'paper' | 'secondary' | 'secondary_opac';
    padding?: string;
    flexCenter?: boolean;
}

export default styled.div<IContainer>`
    background-color: ${(props) => {
        const colorType = props.colorType ? props.colorType : 'main';
        return props.theme.background[`${colorType}`];
    }};

    padding: ${(props) => (props.padding ? props.padding : '1rem')};

    ${(props) =>
        props.flexCenter
            ? 'display: flex; justify-content: center; align-items: center;'
            : ''}
`;
