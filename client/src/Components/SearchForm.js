import React from 'react'
import { Form } from 'semantic-ui-react'

import {useForm} from '../Hooks/useForm'

const SearchForm = (props) => {

  const [country, someFunction] = useForm('country', 'All')

  const countries = new Set(props.countries.map(player => player.country))

  const options = [...countries].map(
    country => {
    let optionObj = {}
    optionObj.key = country
    optionObj.text = country
    optionObj.value = country

    return optionObj

  })


  const handleChange = e => someFunction(e._dispatchInstances[0].return.key)
  const formReset = () => someFunction('All')

  return (
    <Form>
    <Form.Select
      label='Filter Players By Country'
      options={options}
      placeholder={country}
      onChange={handleChange}
    />
    <Form.Button
      onClick={() => props.handleSubmit(country)}
      >Submit</Form.Button>
      <Form.Button
        onClick={() => {
          formReset()
          props.resetForm()
        }}
      >
        Reset List
      </Form.Button>
    </Form>
  )
}

export default SearchForm