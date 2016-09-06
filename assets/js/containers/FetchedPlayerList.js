import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'

const mapStateToProps = (state) => {
  return {
    players: state.players.players.filter(
                 p => p.game == state.game.game.id)
  }
}

const FetchedPlayerList = connect(
  mapStateToProps,
)(PlayerList)

export default FetchedPlayerList 
