import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
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
  'transparent',
];

const grup = [
  {
    label: 'button1',
    onclick: ()=> alert('hola'),
  },
  {
    label: 'button2',
    onclick: ()=> alert('hola'),
  },
  {
    label: 'button3',
    onclick: ()=> alert('hola'),
  },
  {
    label: 'button4',
    onclick: ()=> alert('hola'),
  },
];

export const Button = ({ 
  color,
  border,
  disabled,
  variant,
  size,
  children,
  onClick,
  classtyle,
  center,
  fixed,
  hover,
  hoverColor,
  group,
  buttonRadius,
  style
}) => {
  const classtyles = classtyle ? classtyle : '';
  const disable = disabled ? 'disabled' : '';
  const borders = border ? `B${color}` : '';
  const buttonCenters = center ? 'buttonCenter' : '';
  const fixeds = fixed ? 'fixed': '';
  const hoverB = hover ? `H${color}` : '';
  const [activate, setActivate] = React.useState(group[0].label);
  const buttonRadiu = buttonRadius ? 'buttonRadius' : '';
  const buttons = (event) => {
    setActivate(event.target.value);
  }
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'default':
      return(
        <button 
          style={style}
          className={['button', buttonRadiu, disable, color, size, borders, classtyles, buttonCenters, fixeds].join(' ')}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'borderless':
      return(
        <button 
          style={style}
          className={['button', 'borderless', buttonRadiu, disable, hoverB, `C${color}`, size, borders, classtyles, buttonCenters, fixeds, `HC${hoverColor}`].join(' ')}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case 'icon':
      return(
        <button 
          style={style}
          className={['button', 'buttonicon', disable, color, borders, classtyles, buttonCenters].join(' ')}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'buttonGroup':
      const long = group.length;
      if (long > 2) {
        return(
          <div className="center">
            <button 
              id="id0"
              onClick={group[0].onclick}
              style={activate === group[0].label ? null : {background: '#ffffff', color: '#1c1c1c'}}
              className={
                [disable, `F${color}`, size, borders, classtyles, buttonCenters, 'buttonstart'].join(' ')
              }
              ref={(el) => el && el.style.setProperty("padding", "6px 12px", "important")}
            >
              <input name="buttonGroup" type="radio" onClick={buttons} value={group[0].label} id={group[0].label} style={{opacity: '0', marginLeft: '-13px'}} />
              <label for={group[0].label} >{group[0].label}</label>
            </button>
            {group.slice(1,long-1).map((item, index) =>
              <button
                id={`id${index+1}`} 
                onClick={item.onclick}
                style={activate === item.label ? null : {background: '#ffffff', color: '#1c1c1c'}}
                className={['buttonsGroup', disable, `F${color}`, size, borders, classtyles, buttonCenters].join(' ')}
                ref={(el) => el && el.style.setProperty("padding", "6px 12px", "important")}
              >
                <input name="buttonGroup" type="radio" onClick={buttons} value={item.label} id={item.label} style={{opacity: '0', marginLeft: '-13px'}} />
                <label for={item.label} >{item.label}</label>
              </button>
            )}
            <button
              id={`id${long-1}`}
              onClick={group[long-1].onclick}
              style={activate === group[long-1].label ? null : {background: '#ffffff', color: '#1c1c1c'}}
              className={['buttonend', disable, `F${color}`, size, borders, classtyles, buttonCenters].join(' ')}
              ref={(el) => el && el.style.setProperty("padding", "6px 12px", "important")}
            >
              <input name="buttonGroup" type="radio" onClick={buttons} value={group[long-1].label} id={group[long-1].label} style={{opacity: '0', marginLeft: '-13px'}} />
              <label for={group[long-1].label} >{group[long-1].label}</label>
            </button>
          </div>
        );
      }
  }
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'borderless','icon', 'buttonGroup']),
  color: PropTypes.oneOf(Colors),
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.element,
  onClick: PropTypes.func,
  classtyle: PropTypes.string,
  center: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  group: PropTypes.array,
  buttonRadius: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  color: 'baseBlue',
  border: false,
  disabled: false,
  size: 'medium',
  onClick: undefined,
  center: true,
  fixed: false,
  hover: false,
  hoverColor: 'G500',
  group: grup,
  buttonRadius: true,
};
