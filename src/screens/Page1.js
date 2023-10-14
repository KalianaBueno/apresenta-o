import React from 'react';
import { Card } from "../common-components/Card/Card";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { Lateral } from "../common-components/Lateral/Lateral";
import { ButtonStart} from "../common-components/ButtonStart/ButtonStart";
import ImagemComponent from '../common-components/ImageComponent/ImageComponent';


export function Page1 () {
	return <Card>

		<Lateral>
			<HeadingOne>Inicie sua apresentação pessoal</HeadingOne>

			<ButtonStart>INICIAR</ButtonStart>

		</Lateral>

		<ImagemComponent></ImagemComponent>

	
		


		</Card>

	
}