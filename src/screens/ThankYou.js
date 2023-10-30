import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../common-components/Card/Card";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { Lateral } from "../common-components/Lateral/Lateral";
import { ButtonStart} from "../common-components/ButtonStart/ButtonStart";
import ImagemComponent from '../common-components/ImageComponent/ImageComponent';


export function ThankYou () {
	return <Card>

		<Lateral>
			<HeadingOne>Você Finalizou! Obrigado!</HeadingOne>

			<Link to="/">

			<ButtonStart>Voltar</ButtonStart>
			</Link>

		</Lateral>

		<ImagemComponent></ImagemComponent>

	
		


		</Card>

	
}