import React from 'react'

const Random = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Word-row">
            <span class="category-box random left">R</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box random right" />
        </div>
    )
}

export default Random
