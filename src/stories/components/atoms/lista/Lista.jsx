import React from 'react';
import PropTypes from 'prop-types';
//import './lista.css';
import { RiDashboardFill } from 'react-icons/ri';
import { Caps } from '../caps/Caps';
import { Button } from '../button/Button';

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

const datas = [
  {
    title: 'MAIN MENU',
    data: [
      {itemList: 'Dashboard', func: ()=> alert('Dashboard'), icon: <RiDashboardFill />},
    ],
  }
];
export const Lista = ({ primary, secondary, data}) => {
  return (
    <div>
      {data.map( item => (
        <div>
          <div className={['menutitle'].join(' ')}>
            <Caps bold color={secondary}>{item.title}</Caps>
          </div>
          {item.data.map(option => (
            <Button
              onClick={option.func}
              variant="borderless"
              center={false}
              color={secondary}
              hoverColor={primary}
              fixed
              hover
              classtyle="menubutton"
            >
              {option.icon}
              &nbsp;&nbsp;
              {option.itemList}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

Lista.propTypes = {
  primary: PropTypes.oneOf(backgroundColors),
  secondary: PropTypes.oneOf(backgroundColors),
  data: PropTypes.object,
};

Lista.defaultProps = {
	primary: 'G500',
  secondary: 'baseBlue',
  data: datas,
};
