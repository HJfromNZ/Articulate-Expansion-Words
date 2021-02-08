import React from 'react'

const Action = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Word-row">
            <span class="category-box action left">A</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box action right" />
            
        </div>
    )
}

export default Action
