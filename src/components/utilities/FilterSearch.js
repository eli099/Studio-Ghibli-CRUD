import React from 'react'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

const FilterSearch = ({ filters, directors, handleChange }) => {

  

  return (
    <div className="filter-container m-3">
      <Form className="shadow-sm d-flex justify-content-between p-2 bg-light">
        <Form.Select name="director" className="m-1" value={filters.director} onChange={handleChange}>
          <option value="Directors">All Directors</option>
          {/* Loop through directors */}
          {directors.map((director) => <option value={director} key={director}>{director}</option>)}
        </Form.Select>
        {/* Search field */}
        <FormControl type="search" name="searchTerm" placeholder='Search...' className="m-1"
          aria-label="Search" value={filters.searchTerm} onChange={handleChange}
        />
      </Form>
    </div>
  )
}

export default FilterSearch