import React from 'react';
import PropTypes from 'prop-types';
import './input.css';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

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

const left = {
    float: 'right',
    width: '5%',
    height: '41px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px'
}

const right = {
    float: 'left',
    width: '5%',
    height: '41px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px'
}

export const Input = ({ type,
	children,
	placeholder,
	error,
	errorText,
	name,
	icon,
	iconPosition,
	size,
	onChange,
	success,
	successText,
	color,
	disabled,
	label 
}) => {
	const disable = disabled ? 'disabled' : '';
	const erros = error ? 'error' : '';
	const successs = success ? 'success' : '';
	const icons = icon ? iconPosition : '';
  return (
    <div className={[
				'inputContainer',
				size,
				icons,
				`C${color}`,
				`I${color}`,
				disable,
				erros,
				successs
			].join(' ')}>
			<label for={name} style={{width: '100%'}} >{type !== 'search' ? label : null}</label>
			<input
				style={icon ? {width: '95%'} : null}
				disabled={disabled} 
				autoComplete="off" 
				id={name} 
				name={name} 
				type={type} 
				placeholder={placeholder} 
				onChange={onChange}
			/>
			{icon ? 
				<div style={iconPosition === 'iconRight' ? right : left}>
					{children}
				</div> 
			: null}
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
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text','number','password','date','search','email']),
	children: PropTypes.node,
	placeholder: PropTypes.string,
	error: PropTypes.bool,
	errorText: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	icon: PropTypes.bool,
	iconPosition: PropTypes.oneOf(['iconLeft','iconRight']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	onChange: PropTypes.func,
	success: PropTypes.bool,
	successText: PropTypes.string,
	color: PropTypes.oneOf(Colors) ,
	disabled: PropTypes.bool,
};

Input.defaultProps = {
	type: 'text',
	onChange: () => {},
	error: false,
	success: false,
	disabled: false,
	size: 'medium'
};
