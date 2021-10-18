import styled from 'styled-components';

interface IContainer {
    colorType?: 'contrast' | 'main' | 'paper' | 'secondary' | 'secondary_opac';
}

export default styled.div<IContainer>`
    background-color: ${(props) => {
        const colorType = props.colorType ? props.colorType : 'main';
        return props.theme.background[`${colorType}`];
    }};

    padding: 1em;
`;
