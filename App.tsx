import { JSX } from 'react/jsx-runtime';
import React from 'react';

const App: React.FC = (): JSX.Element => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2UrlCt9ZWhh8EY80vJHpSCAbw8OBSadZkA&s" alt="Isomporphic Web Applications Book Cover" />
            <h1>Hello from an Isomorphic App!</h1>
            <button onClick={() => alert('It works!')}>Click Me</button>
        </div>
    );
};

export default App;