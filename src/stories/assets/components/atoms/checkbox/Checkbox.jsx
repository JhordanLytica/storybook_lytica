import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const backgroundColors = [
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
export const Checkbox = ({ color, label, value, onChange, checked, name, disabled, variant }) => {
	const disable = disabled ? 'disabled' : '';
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'checkbox':
      return (
        <label className={['checkbox', disable, `SI${color}`].join(' ')}>{label}
          <input 
            disabled={disabled} 
            type="checkbox" onChange={onChange} 
            name={name} 
            checked={checked} 
            value={value} />
          <span />
        </label>
      );
    case 'radio':
      return (
        <label className={['radio', disable, `SI${color}`].join(' ')}>{label}
          <input 
            disabled={disabled} 
            type="radio" onChange={onChange} 
            name={name} 
            checked={checked} 
            value={value} />
          <span />
        </label>
      );
  }
};

Checkbox.propTypes = {
  variant: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  color: PropTypes.oneOf(backgroundColors),
	label: PropTypes.string, 
	value: PropTypes.string, 
	onChange: PropTypes.func, 
	checked: PropTypes.bool, 
	name: PropTypes.string, 
	disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
	onChange: () => {},
  checked: false,
  disabled: false,
	color: 'SIbaseBlue',
  variant: 'checkbox',
};
