import React from 'react'

const World = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Word-row" word={nature[index]}>
            <span className="category-box world left">W</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box world right" />
        </div>
    )
}

export default World
