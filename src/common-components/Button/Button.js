import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';


export const Button = styled.button`
border: none;
outline: none;
width: 210px;
height: 50px;
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.REGULAR};
background-color: ${(props) => props.ghost ? Colors.GREY_300 : Colors.BLUE};
color: ${Colors.NEUTRAL_WHITE};
border-radius: ${BorderRadiuses.THREE};
padding: ${Spaces.ONE} ${Spaces.TWO};
cursor: pointer;
font-size: ${FontSizes.MEDIUM};
position: absolute; top: 500px; right: 80px; transform: translate(-50%, -50%); 

}`;

