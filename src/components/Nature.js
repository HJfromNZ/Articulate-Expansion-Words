import React from 'react'

const Nature = () => {

    const nature = ['creature', 'beast', 'fauna']

    const index = Math.floor(Math.random() * 2)

    return (
        <div className="Word-row">
            <span class="category-box nature left">N</span>
            <span className="Word">{nature[index]}</span>
            <span class="category-box nature right" />
        </div>
    )
}

export default Nature
