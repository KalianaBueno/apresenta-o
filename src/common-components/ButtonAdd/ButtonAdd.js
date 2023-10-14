import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';


export const ButtonAdd = styled.button`
border: none;
outline: none;
width: 210px;
height: 40px;
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.THIN};
background-color: ${(props) => props.ghost ? Colors.GREY_300 : Colors.BLUE};
color: ${Colors.NEUTRAL_WHITE};
border-radius: ${BorderRadiuses.THREE};
padding: ${Spaces.ONE} ${Spaces.TWO};
cursor: pointer;
font-size: ${FontSizes.SMALL};
position: absolute; right: 40px;

}`;