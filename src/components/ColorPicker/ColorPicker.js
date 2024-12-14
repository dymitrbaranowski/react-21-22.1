import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  render() {
    const { options } = this.props;
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* <p>Выбран цвет: {label}</p> */}
        <div>
          {options.map(({ label, color }) => (
            <span
              key={label}
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
