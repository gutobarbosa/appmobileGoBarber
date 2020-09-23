// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <h1> Ola mundo</h1>
    </View>
  </>
);
export default App;
