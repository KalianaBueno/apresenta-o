import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';


export const TextField = styled.input`
border: 1px solid ${Colors.GRAY_300};
background-color: ${Colors.GRAY_BACKGROUND};
width: 500px;
height: 16px;
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.THIN};
color: ${Colors.GRAY_300};
border-radius: ${BorderRadiuses.ONE};
padding: ${Spaces.ONE} ${Spaces.TWO};
font-size: ${FontSizes.SMALL};
margin: 10px 30px 10px;

}`;
