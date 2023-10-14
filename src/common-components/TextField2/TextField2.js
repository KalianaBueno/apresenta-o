import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';


export const TextField2 = styled.input`
border: 1px solid ${Colors.GRAY_300};
background-color: ${Colors.GRAY_BACKGROUND};
width: 500px;
height: 292px;
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.THIN};
color: ${Colors.GRAY_300};
border-radius: ${BorderRadiuses.ONE};
padding: ${Spaces.ONE} ${Spaces.TWO};
font-size: ${FontSizes.SMALL};
position: absolute; top: 50%; left: 645px;
transform: translate(-50%, -50%); 
}`;