// import styled from 'styled-components';
// import {Link} from 'react-router-dom';
// import {
//     BorderRadiuses,
//     Colors,
//     FontFamilies,
//     FontWeights,
//     FontSizes,
//     Spaces,
// } from '../../shared/DesignTolkens';


// export const ButtonCep = styled(Link)`
// border: none;
// outline: none;
// width: 150px;
// height: 30px;
// font-family: ${FontFamilies.PRIMARY};
// font-weight: ${FontWeights.REGULAR};
// background-color: ${(props) => props.ghost ? Colors.GREY_300 : Colors.BLUE};
// color: ${Colors.NEUTRAL_WHITE};
// border-radius: ${BorderRadiuses.THREE};
// padding: ${Spaces.ONE} ${Spaces.TWO};
// text-align: center;
// text-decoration: none;
// cursor: pointer;
// font-size: ${FontSizes.MEDIUM};
// position: absolute; top: 400px; right: 80px; transform: translate(-50%, -50%); 

// }`;



import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
    Spaces,
} from '../../shared/DesignTolkens';
import { Card } from '../Card/Card';

const StyledButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  height: 30px;
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.REGULAR};
  background-color: ${Colors.BLUE};
  color: ${Colors.NEUTRAL_WHITE};
  border-radius: ${BorderRadiuses.THREE};
  padding: ${Spaces.ONE} ${Spaces.TWO};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: ${FontSizes.MEDIUM};
  position: absolute;
  top: 400px;
  right: 98px;
  transform: translate(-50%, -50%);
`;


function ButtonCep() {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchCep = () => {
    if (/^\d{5}-\d{3}$/.test(cep)) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setCepData(response.data);
          setError(null);
        })
        .catch((err) => {
          setError('CEP não encontrado');
          setCepData(null);
        });
    } else {
      setError('CEP inválido');
      setCepData(null);
    }
  };

  return (
    <div  style={{ margin: '10px 150px 40px' }}>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleSearchCep} >Buscar CEP</button>
      {cepData && (
        <div>
          <p style={{ margin: '5px' }}>CEP: {cepData.cep}</p>
          <p style={{ margin: '5px' }}>Logradouro: {cepData.logradouro}</p>
          <p style={{ margin: '5px' }}>Bairro: {cepData.bairro}</p>
          <p style={{ margin: '5px' }}>Cidade: {cepData.localidade}</p>
          <p style={{ margin: '5px' }}>Estado: {cepData.uf}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ButtonCep;
