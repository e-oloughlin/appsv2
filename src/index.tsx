import { registerElements } from 'genesys-spark-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'genesys-spark-components/dist/genesys-webcomponents/genesys-webcomponents.css';
import App from './App';

registerElements();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
