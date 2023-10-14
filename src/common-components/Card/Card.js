import styled from 'styled-components';
import { Colors, BorderRadiuses, Shadows} from '../../shared/DesignTolkens';

export const Card = styled.div`
width: 945px;
height: 574px;
border: 1px solid ${Colors.GRAY_300};
border-radius: ${BorderRadiuses.TWO};
display: flex;
align-items: center;
justify-content: center; 
position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
box-shadow: ${Shadows.ONE};

}`;