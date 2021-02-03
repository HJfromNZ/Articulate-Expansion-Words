import './App.css';
import React, {useState} from 'react'
import Nature from './components/Nature'
import Row from './components/Row'

function App() {

    const [words, setWords] = useState([])

    function hello() {
        fetch('http://api.datamuse.com/words?ml=duck&sp=b*')
            .then(res => res.json())
            .then(json => console.log(json))

    }
    
    return (
        <div className="App">

        {/* Comment*/}

        <header className="App-header">
            {words}
        </header>
        <header className="App-header">
            <button onClick={hello}>HELLO WORLD</button>
        </header>
        <header className="App-header">
            <Row category="Object" word=<Nature/>/>
        </header>
        <header className="App-header">
            Action
        </header>
        <header className="App-header">
            <Nature />
        </header>
        <header className="App-header">
            Random
        </header>

        



    </div>

    );
}

export default App;
