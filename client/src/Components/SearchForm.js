import React from 'react'
import { Form } from 'semantic-ui-react'

const SearchForm = (props) => {

  const countries = new Set(props.data.map(player => player.country))

  const options = [...countries].map(
    country => {
    let optionObj = {}
    optionObj.key = country
    optionObj.text = country
    optionObj.value = country

    return optionObj

  })

  return (
    <Form.Select
      label='Filter Players By Country'
      options={options}
      placeholder='All'
      onChange={console.log(value)}
    />
  )
}

export default SearchForm