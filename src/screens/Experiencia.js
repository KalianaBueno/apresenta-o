import { Button } from "../common-components/Button/Button";
import { Card } from "../common-components/Card/Card";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { Lateral } from "../common-components/Lateral/Lateral";
import { TextField2 } from "../common-components/TextField2/TextField2";
import { Link } from 'react-router-dom';


export function Experiencia () {
	return <Card>

		<Lateral>
			<HeadingOne>EXPERIÊNCIAS</HeadingOne>

		</Lateral>
		
		<TextField2 placeholder="Descreva suas experiências"></TextField2>
		
		<Link to="/hobbies/:id">
		<Button>Registrar</Button>
		</Link>

		


		</Card>

	
}