import './App.css';
import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

import Person from './components/Person'
import World from './components/World'
import ArticulateObject from './components/ArticulateObject'
import Action from './components/Action'
import Nature from './components/Nature'
import Random from './components/Random'

import Timer from './components/Timer'
import SkippedCard from './components/SkippedCard'


function App() {

    const [words, setWords] = useState([])
    const [score, setScore] = useState(0)
    const [skips, setSkips] = useState(5)
    const [seconds, setSeconds] = useState(3)

    function incrementScore() {
        if (seconds != 0) {
            return setScore(prev => prev + 1)    
        }
    }

    function incrementSkips() {
        if (score !== 5) {
            return setSkips(prev => prev + 1)
        }
    }

    function decrementSkips() {
        if (skips !== 0) {
            return setSkips(prev => prev - 1)
        }
    }
    
    return (
        <div className="App">
        
        
        <div>
            <span className="Score">Score: {score}</span>
            <span className="Timer"><Timer seconds={seconds} /></span>
        </div>
        

        {/* <div className="Game-buttons">

            <Button className="Correct-button" variant="success" onClick={incrementScore}>Correct</Button>
        </div> */}
        
        <header className="App-header">
            <Person />
        
            <World />

            <ArticulateObject />    

            <Action />

            <Nature />

            <Random />

        </header>

        <div className="Game-button">
            <div className="Skips">Skips remaining: {skips}</div>
            <Button variant="warning" onClick={decrementSkips}>Skip</Button>
        </div>

        <div className="Skipped-cards">
            <SkippedCard />
            <SkippedCard />
        </div>

    </div>

    );
}

export default App;
