import React, { useEffect, useState, } from 'react'
import { Link, } from 'react-router-dom'
import axios from 'axios'

const Categories = props => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('/api/v1/categories').then(response => {
      console.log("response: ", response)
      if (response.status == 200) {
        setCategories(response.data)
      }
    })
  }, [])

  render() {
    <div>
      <h1>Categories</h1>
      {
        categories.map((category, index) => (
          <Link to={`/category/${category.id}`} key={`category-${index}`}>
            {category.title}
          </Link>
        ))
      }
    </div>
  }
}


export default Categories
