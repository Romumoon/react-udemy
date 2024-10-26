import { createRoot } from 'react-dom/client';
import './index.css'
import Primeiro from './components/basicos/Primeiro';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <div><Primeiro></Primeiro></div>
)