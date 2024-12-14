import React, { Component } from 'react';
//import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3F51B5' },
];
class App extends Component {
  render() {
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown /> */}

        <ColorPicker options={colorPickerOptions} />
      </>
    );
  }
}

export default App;
