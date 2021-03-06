const React = require('react-native')
const { Provider } = require('react-redux/native')
const App = require('./ReactNativeComponents/containers/App')
const configureStore = require('./ReactNativeComponents/store/configureStore')

const {
  Component,
  AppRegistry
} = React

const store = configureStore()

class GeoCoding extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

AppRegistry.registerComponent('GeoCodingReactNativeHybrid', () => GeoCoding);
