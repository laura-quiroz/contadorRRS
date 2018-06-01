import React from 'react'
import { Button, Container, Icon } from 'semantic-ui-react'
import '../index.css'

const CounterScene = props => {
  return (
    <Container>
      <div className="container_counter">
        <h1>Counter</h1>
        <h2>{props.counter}</h2>
        <div>
          <Button onClick={props.ESPERA_SUMAR}>
            <Icon name="add" />
          </Button>
          <Button onClick={props.ESPERA_RESTAR}>
            <Icon name="minus" />
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default CounterScene
