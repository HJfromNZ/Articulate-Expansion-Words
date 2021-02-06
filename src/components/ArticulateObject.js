import React from 'react'

const ArticulateObject = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Nothing">
            <span class="category-box articulateObject left">O</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box articulateObject right" />
        </div>
    )
}

export default ArticulateObject
