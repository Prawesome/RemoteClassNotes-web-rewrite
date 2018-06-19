import React, {
  Component
} from 'react';
import Login from './components/Login'
import GridScreen from './components/GridScreen';
import UploadScreen from './components/UploadScreen';

class App extends Component {
  render() {
    return ( <GridScreen />
    );
  }
}

export default App;