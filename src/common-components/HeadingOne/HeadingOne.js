import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTolkens';

export const HeadingOne = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	font-size: ${FontSizes.MEDIUM};
	color: ${Colors.NEUTRAL_WHITE};
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
}`;
