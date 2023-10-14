import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './screens/Page1';
import { SobreVoce } from './screens/SobreVoce';
import { Formacao } from './screens/Formacao';
import { Experiencia } from './screens/Experiencia';
import { Hobbies } from './screens/Hobbies';
import { ThankYou } from './screens/ThankYou';


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sobrevoce/:id" element={<SobreVoce />} />
                <Route path="/" element={<Page1 />} />
                <Route path="*" element="Página não encontrada" />
                <Route path="/formacao/:id" element={<Formacao />} />
                <Route path="/experiencia/:id" element={<Experiencia />} />
                <Route path="/hobbies/:id" element={<Hobbies />} />
                <Route path="/thankyou/:id" element={<ThankYou />} />


            </Routes>
        </BrowserRouter>
    );
}
