import React from 'react'

const Person = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Word-row">
            <span class="category-box person left">P</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box person right" />
        </div>
    )
}

export default Person
