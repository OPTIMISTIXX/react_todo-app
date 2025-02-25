import { createRoot } from 'react-dom/client';

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { Provider } from './contexts/TodosContext';
import { App } from './App';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <Provider>
    <App />
  </Provider>,
);
