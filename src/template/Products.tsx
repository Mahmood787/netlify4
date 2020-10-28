import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
const Products = ({pageContext}) => {
    console.log(pageContext)
    const {itemDetails}= pageContext
    return (
        <div>
            <h1>{itemDetails.title}</h1>
            <p>{documentToReactComponents(itemDetails.content.json)}</p>
        </div>
    )
}

export default Products
