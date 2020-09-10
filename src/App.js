import React from 'react';
import { Provider } from 'react-redux';
import BookContainer from './component/BookContainer';
import HookBookConatiner from './component/HookBookContainer';
import store from './redux/store'; 
import './App.css';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <HookBookConatiner />
       <BookContainer />
     </Provider>
    </div>
  );
}
export default App;
