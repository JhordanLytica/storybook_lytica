import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';
import imgDefault from '../../images/default-user-image.png';

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

export const Avatar = ({ imagen, color, children, size, variant, activated, ...props}) => {
	const estilos = {
		avatar: ['avatar', size],
	};
	switch (variant) {
		case 'Placeholder':
			return (
				<div className={['avatar', size].join(' ')}>
					{imagen ? 
						<img src={imagen} alt="Avatar" className={['imagen'].join(' ')} />
					: 
						<img src={imgDefault} alt="Avatar" className={['imagen'].join(' ')} />
					}
					{activated ? <div className={['activated'].join(' ')} /> : null}
				</div>
			);
		case 'Num':
			return (
        <div className={['avatar', size, color].join(' ')}>
          <div className={['center'].join(' ')}>
            {children}
          </div>
        </div>
      );
		default:
			return (
				<div className={estilos.avatar.join(' ')} {...props} >
					{imagen ? 
						<img src={imagen} alt="Avatar" className={['imagen'].join(' ')} />
					: 
						<img src={imgDefault} alt="Avatar" className={['imagen'].join(' ')} />
					}
					{activated ? <div className={['activated'].join(' ')} /> : null}
				</div>
			);
	}
};

Avatar.propTypes = {
	color: PropTypes.oneOf(Colors),
  imagen: PropTypes.string,
  size: PropTypes.oneOf(['uno', 'dos', 'tres', 'cuatro']),
  variant: PropTypes.oneOf(['Placeholder', 'Num']),
  activated: PropTypes.bool,
	children: PropTypes.node,
}

Avatar.defaultProps = {
  size: 'tres',
	activated: false,
	children: 1,
	color: 'baseBlue',
}