import React from 'react'
import { Card } from 'semantic-ui-react'

const PlayerCard = props => {

  return (
    <Card
      header={props.name}
      meta={props.country}
      extra={props.searches}
    />
  )  
}

export default PlayerCard