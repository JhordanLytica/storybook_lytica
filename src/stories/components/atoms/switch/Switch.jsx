import React from 'react';
import PropTypes from 'prop-types';
import './switch.css';

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
export const Switch = ({ color, onClick, checked, text1, text2, circle, disabled }) => {
	const disable = disabled ? 'disabled' : '';
  const circles = circle ? 'circle' : '';
  return(
    <div>
      {text1 ? <label style={{ marginRight: '15px' }}>{text1}</label> : null}
      <label className={['switch', disable, `SW${color}`, circles].join(' ')}>
        <input disabled={disabled} type="checkbox" onClick={onClick} checked={checked}/>
        <span/>
      </label>
      {text2 ? <label style={{ marginLeft: '15px' }}>{text2}</label> : null}
    </div>
  );
};

Switch.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
	disabled: PropTypes.bool,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  text1: PropTypes.string,
  text2: PropTypes.string,
  circle: PropTypes.bool,
};

Switch.defaultProps = {
	onClick: () => {},
  checked: false,
  disabled: false,
	color: 'baseBlue',
  circle: true
};
