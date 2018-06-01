import { connect } from 'react-redux'
import CounterScene from '../scene/counter.scene'
import Actions from '../core/actions'

const mapStateToProps = state => ({
  hello: 'Hello Counter',
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch({ type: Actions.SUMAR }),
  decrementar: () => dispatch({ type: Actions.RESTAR }),
  ESPERA_SUMAR: () => dispatch({ type: Actions.ESPERA_SUMAR }),
  ESPERA_RESTAR: () => dispatch({ type: Actions.ESPERA_RESTAR })
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterScene)
