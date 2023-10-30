import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../common-components/Button/Button";
import ButtonCep from "../common-components/ButtonCep/ButtonCep";
import { Card } from "../common-components/Card/Card";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { Lateral } from "../common-components/Lateral/Lateral";
import { TextField } from "../common-components/TextField/TextField";


export function SobreVoce () {
	return <Card>

		<Lateral>
			<HeadingOne>SOBRE VOCÊ</HeadingOne>
		</Lateral>

		<div style={{ marginLeft: '350px' }}>

		<TextField placeholder='Nome'></TextField>
		<TextField placeholder='Sobrenome'></TextField>
		<TextField placeholder='Idade'></TextField>
		<TextField placeholder='Gênero'></TextField>

		
		<ButtonCep></ButtonCep>

		</div>

		<Link to="/formacao/:id">
			
		<Button>Registrar</Button>
		</Link>

		


		</Card>

	
}