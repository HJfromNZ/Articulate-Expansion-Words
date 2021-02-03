import React from 'react'

const Row = ({category, word}) => {
    return (
        <div>
            <header className="App-header">
                {category} and {word}
            </header>
        </div>
    )
}

export default Row
