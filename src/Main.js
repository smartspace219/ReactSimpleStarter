import logo from './logo.svg';//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

import './Main.css';
function Welcome() {
    return <div>welcome!</div>;
}
function Main() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome />
                <h1 class=" text-3xl font-bold underline">
                    Hello world!
                </h1>
                <div class=" container mx-auto">
                    asd
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Main;
