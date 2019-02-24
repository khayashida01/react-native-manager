import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// import { Header } from './components/common';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyA92Evm-30FpvDc3QWXUmeaZmX9ScvElUc',
      authDomain: 'manager-4c4f0.firebaseapp.com',
      databaseURL: 'https://manager-4c4f0.firebaseio.com',
      projectId: 'manager-4c4f0',
      storageBucket: 'manager-4c4f0.appspot.com',
      messagingSenderId: '10389038381'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.containerStyle}>
          {/* <Header headerText="Manager" /> */}
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  }
};
export default App;
