import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

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
export const Textarea = ({ placeholder, error, errorText, name, size, onChange, success, successText, color, disabled, rows, cols }) => {
	const disable = disabled ? 'disabled' : '';
  const erros = error ? 'error' : '';
	const successs = success ? 'success' : '';
  return (
    <div className={[
        'textAreaContainer', 
        size,
        `C${color}`,
        `I${color}`,
        disable,
        erros,
        successs
      ].join(' ')}
    >
      <label for={name}>{name}</label>
      <textarea 
          disabled={disabled} 
          id={name} 
          name={name} 
          placeholder={placeholder} 
          onChange={onChange}
          rows={rows}
          cols={cols}
      />
      {error ?
          <div className={['containerAccion'].join(' ')} >
              <RiErrorWarningFill />
              {errorText}
          </div>
      :null}
      {success ?
          <div className={['containerAccion'].join(' ')} >
              <AiFillCheckCircle />
              {successText}
          </div>
      : null}
    </div>
  )
};

Textarea.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
	disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func,
  success: PropTypes.bool,
  successText: PropTypes.string,
  rows: PropTypes.number,
  col: PropTypes.number,
};

Textarea.defaultProps = {
	onChange: () => {},
  disabled: false,
	color: 'baseBlue',
  success: false,
  error: false,
  name: 'Default',
  size: 'medium',
  rows: 4,
  col: 50,
  placeholder: 'Escriba un texto',
};
