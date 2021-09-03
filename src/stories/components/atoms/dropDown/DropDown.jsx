import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './dropDown.css';
import { TiArrowSortedDown } from 'react-icons/ti';
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
export const DropDown = ({ label, color, data, size }) => {
  const [hidden, setHidden] = useState(true);
  const show = hidden ? 'hidden' : 'show';
  return (
    <div className={[`C${color}`].join(' ')}>
      <div className={[size, 'containerDrop'].join(' ')}>
        {label}
        <button className={['divIcon'].join(' ')} onClick={() => setHidden(hidden ? false : true)}>
          <TiArrowSortedDown />
        </button>
      </div>
      <div className={[show, 'ha', 'shadow'].join(' ')}>
        {data.map(item => <div className={['dropItem'].join(' ')}>{item}</div>)}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  data: PropTypes.array,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small','medium','large',]),
};

DropDown.defaultProps = {
	color: 'G100',
  data: [],
  size: 'medium',
};
