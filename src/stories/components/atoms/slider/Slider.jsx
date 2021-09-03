import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './slider.css';

const Colors = [
  'baseBlue',
  'LB20',
  'LB40',
  'LB60',
  'DB20',
  'DB40',
  'DB60',
  'baseGreen',
  'LG20',
  'LG40',
  'LG60',
  'DG20',
  'DG40',
  'DG60',
  'baseOrange',
  'LO20',
  'LO40',
  'LO60',
  'DO20',
  'DO40',
  'DO60',
  'baseRed',
  'LR20',
  'LR40',
  'LR60',
  'DR20',
  'DR40',
  'DR60',
  'basePink',
  'LP20',
  'LP40',
  'LP60',
  'DP20',
  'DP40',
  'DP60',
  'G100',
  'G200',
  'G300',
  'G400',
  'G500',
];
/**
 * Primary UI component for user interaction
 */
export const Slider = ({ color, valueDefault, max, min, steps, disabled }) => {
	const disable = disabled ? 'disabled' : '';
  const [state, setState] = useState(valueDefault);
  const sliderState = (event) => {
    setState(event.target.value)
  }
  return (
    <div className={['range', disable, color, `C${color}`, `B${color}`].join(' ')}>
        <div className={['sliderValue'].join(' ')}>
            <span style={{left: `${(state/max)*100}%`}} >{state}</span>
        </div>
        <div className={['field'].join(' ')}>
            <div className={['left', 'value', `C${color}`].join(' ')}>{min}</div>
            <input disabled={disabled} type="range" min={min} max={max} defaultValue={state} step={steps} onChange={sliderState} />
            <div className={['right', 'value', `C${color}`].join(' ')}>{max}</div>
        </div>
    </div>
  );
};

Slider.propTypes = {
  color: PropTypes.oneOf(Colors),
	disabled: PropTypes.bool,
  valueDefault: PropTypes.number, 
  max: PropTypes.number, 
  min: PropTypes.number, 
  steps: PropTypes.number,
};

Slider.defaultProps = {
  disabled: false,
	color: 'baseBlue',
  valueDefault: 50,
  min: 0,
  max: 100,
  steps: 1,
  disabled: false,
};
