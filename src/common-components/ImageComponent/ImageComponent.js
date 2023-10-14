import React from 'react';
import Image from '../../assets/images/image.png';
import styled from 'styled-components';

const CardWithImage = styled.div`
width: 945px;
height: 574px;
`;

const Imagem = styled.img`
  width: 50%;
  height: 70%;
  justify-content: center; 
  position: absolute; top: 50%; left: 67%; transform: translate(-50%, -50%);
  `;

function ImagemComponent() {
    return (
      <CardWithImage>
        <Imagem src={Image} alt="Descrição da imagem" />
      </CardWithImage>
    );
  }
  
  export default ImagemComponent;
