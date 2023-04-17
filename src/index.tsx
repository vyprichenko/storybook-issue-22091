import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.body
);

