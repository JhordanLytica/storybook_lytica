import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import { Avatar } from '../../atoms/avatar/Avatar';
import { Notifications } from '../../atoms/notifications/Notifications';
import { DropDown } from '../../atoms/dropDown/DropDown'

export const Menu = ({ notification, options, user, logo, text, height, width, avatar }) => {
  return (
    <div className={['menu', 'backgroundLightPrimary'].join(' ')}>
      <div className={['ContainerLogo'].join(' ')}>
        {logo !== '' ? 
          <img src={logo} height={`${height}px`} width={`${width}px`} alt="logo de la empres" />
          : <h1>{text}</h1>
        }
      </div>
      <div className={['ContainerOptions'].join(' ')}>
        <Notifications number={notification}/>
        <Avatar 
          color="LB60" 
          variant={avatar ? 'Placeholder' : 'Num'}
          imagen={avatar}
        >{user}</Avatar>
        <div className={['optionsdrop'].join(' ')}>
          <DropDown label={user} data={options} />
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  notification: PropTypes.number,
  options: PropTypes.array,
  user: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  logo: PropTypes.string,
  avatar: PropTypes.string,
};

Menu.defaultProps = {
  notification: 1,
  logo: '',
  text: 'Logo',
};
