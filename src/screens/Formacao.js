import React from 'react';
import { Button } from "../common-components/Button/Button";
import { ButtonAdd } from '../common-components/ButtonAdd/ButtonAdd';
import ButtonCep from "../common-components/ButtonCep/ButtonCep";
import { Card } from "../common-components/Card/Card";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { Lateral } from "../common-components/Lateral/Lateral";
import { TextField } from "../common-components/TextField/TextField";


export function Formacao () {
	return <Card>

		<Lateral>
			<HeadingOne>FORMAÇÃO</HeadingOne>
		</Lateral>

		<div style={{ marginLeft: '350px' }}>

		<TextField placeholder='Nível de escolaridade'></TextField>
		<br/>
		<br/>
		<br/>
		<TextField placeholder='Curso Superior'></TextField>
		<TextField placeholder='Instituição'></TextField>
		<TextField placeholder='Ano de conclusão'></TextField>
		<br/>


		<ButtonAdd>Nova formação</ButtonAdd>

		<br/>
		<br/>
		<br/>

		<TextField placeholder='Cursos Livres'></TextField>




		</div>

		
		<Button>Registrar</Button>

		


		</Card>

	
}