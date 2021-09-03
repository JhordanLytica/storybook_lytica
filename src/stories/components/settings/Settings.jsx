import React from 'react';
import './settings.css';

const backgroundColors = [
  ['baseBlue', '#0084ff'],
  ['LB20', '#339cff'],
  ['LB40', '#66b5ff'],
  ['LB60', '#e6f3ff'],
  ['DB20', '#0069cc'],
  ['DB40', '#003566'],
  ['DB60', '#003566'],
  ['baseGreen', '#00b834'],
  ['LG20', '#00ff48'],
  ['LG40', '#33ff6d'],
  ['LG60', '#66ff91'],
  ['DG20', '#00992b'],
  ['DG40', '#00661d'],
  ['DG60', '#004213'],
  ['baseOrange', '#fa8500'],
  ['LO20', '#ff941a'],
  ['LO40', '#ffac4d'],
  ['LO60', '#ffd9ab'],
  ['DO20', '#995200'],
  ['DO40', '#663600'],
  ['DO60', '#c1751d'],
  ['baseRed', '#e92b2b'],
  ['LR20', '#ee5959'],
  ['LR40', '#f28787'],
  ['LR60', '#f7b5b5'],
  ['DR20', '#8a0f0f'],
  ['DR40', '#5c0a0a'],
  ['DR60', '#2e0505'],
  ['basePink', '#d77fc8'],
  ['LP20', '#e3a6d9'],
  ['LP40', '#efcde9'],
  ['LP60', '#fbf3fa'],
  ['DP20', '#BA59AA'],
  ['DP40', '#8c4380'],
  ['DP60', '#5d2c55'],
  ['G100', '#1C1C1C'],
  ['G200', '#585757'],
  ['G300', '#969696'],
  ['G400', '#CCCCCC'],
  ['G500', '#E8E8E8'],
  ['G600', '#F4F2F2'],
  ['backgroundDarkPrimary', '#111111'],
  ['backgroundDarkSecondary', '#1c1c1c'],
  ['backgroundLightPrimary', '#ffffff'],
  ['backgroundLightSecondary', '#f7f7f7'],
];

/**
 * Primary UI component for user interaction
 */
export const Paleta = () => {
  return (
    <div className={['paleta'].join(' ')}>
      {backgroundColors.map(item => (
        <div 
          style={/^D|^backgroundDark|^G[1-3]00/.test(item) ? {color: '#FFFFFF'} : null} 
          key={item[0]} 
          className={[item[0]].join(' ')}
        >
          {item[0]}
          <br />
          {item[1]}
        </div>
      ))}
    </div>
  );
};
