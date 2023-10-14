import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';


export const ButtonStart = styled.button`
border: 1px solid ${Colors.NEUTRAL_WHITE};
outline: none;
width: 210px;
height: 50px;
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.REGULAR};
background-color: ${Colors.BLUE};
color: ${Colors.NEUTRAL_WHITE};
border-radius: ${BorderRadiuses.THREE};
padding: ${Spaces.ONE} ${Spaces.TWO};
cursor: pointer;
font-size: ${FontSizes.MEDIUM};
position: absolute; top:70%; left: 20%;

}`;
