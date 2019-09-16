import React from 'react'
import { Card } from 'semantic-ui-react'

import PlayerCard from './PlayerCard'



const Players = props => {

  const cards = props.list.map(player => {
    return (
      <PlayerCard
        key={player.id}
        name={player.name}
        country={player.country}
        searches={player.searches}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={4}>
      {cards}
    </Card.Group>

  )
}

export default Players