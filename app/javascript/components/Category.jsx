import React, { useEffect, useState, } from 'react'

import axios from 'axios'

const Category = props => {
  const [category, setCategory] = useState({})

  useEffect(() => {
    axios.get('/api/v1/categories/' + this.props.match.params.id).then(response => {
      if (response.state === 200) {
        setCategory(response.data)
      }
    })
  }, [])

  render() {
    <div>
      <h1>Category: {catergory.title}</h1>
      {
        (category.products || []).map((product, index) => (
          <div key={`product-${index}`}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))
      }
    </div>
  }
}

export default Category
