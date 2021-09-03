import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './select.css';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillCheckCircle, AiOutlineSearch } from 'react-icons/ai';
import { TiArrowUnsorted } from 'react-icons/ti';
import { MdCancel } from 'react-icons/md';
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
/**
 * Primary UI component for user interaction
 */
export const Select = ({
  color,
  data,
  label,
  size,
  border,
  error,
  success,
  textScuccess,
  textError,
  disabled,
  multiple,
  style,
  onChange,
  colorSecondary,
  button,
  onClick,
  textButton,
  search,
  valueDefault,
}) => {
	const [activate, setActivate] = useState(false);
  const [state, setState] = useState([]);
  const [position, setPosition] = useState(null);
  const [option, setOption] = useState (data);
  const [all, setAll] = useState(false);
  const disable = disabled ? 'disabled' : '';
  const errors = error ? 'error' : '';
  const successs = success ? 'success' : '';
  const activates = activate ? 'activar' : '';
  const  multiples =  multiple ? 'multiple' : 'radio';
  const  borders =  border ? '' : 'border';
  const options = useRef(null);
  const buscar = useRef(null);
  useEffect(() => {
    if (valueDefault !== ''){
      setState([valueDefault]);
    }
  }, [valueDefault]);
  const paddings = multiple && state.length === 0 && size === 'small' ? 'paddingSmall' :
  size === 'small' && multiple !== true ? 'paddingSmall' :
                  multiple && state.length > 0 ? 'padding' : null;
  const textOption = (index) => {
    setPosition(index);
    options.current.click();
  };

  const reset = () => {
    buscar.current.value = "";
    return setOption(data);
  }
  
  const buscador = (event) => {
    if (event.target.value !== "") {
      setActivate(true);
      let array = []
      if (option[0].values) {
        // eslint-disable-next-line array-callback-return
        option.map((item, index) => {
          const filtrar = option[index].values.filter(function(el) {
            return el.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
          });
          array[index] = {title: item.title, values:filtrar};
        })
        return setOption(array);
      }
      return setOption(option.filter(function(el) {
        return el.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
      }));
    } 
    return setOption(data);
  };

  const handleChange = (event) => {
    if (multiple) {
      if (event.target.checked && event.target.value === 'Todos'){
        return setState([event.target.value]);
      }else if (event.target.checked === false && event.target.value === 'Todos') {
        return setState([]);
      } else if (event.target.checked && event.target.value) {
        return setState([...state, event.target.value]);
      } else {
        //setActivate(false);
        //state.splice(state.indexOf(event.target.value), 1);
        return setState(state.filter(function(state) {
          return state !== event.target.value;
        }));
      }
    }
    return setState([event.target.value]);
  };
  return (
    <div className={['select', disable, `C${color}`, errors, successs].join(' ')} style={style}>
      <div style={{padding: '10px 0px 2px', lineHeight: '20px'}}>
        <label className={[size].join(' ')}>{label}</label>
      </div>
      <div className={['selectBox', `B${color}`].join(' ')}>
        <div className={['optionsContainer', activates].join(' ')}>
          {multiple ? 
            <div className={['option'].join(' ')}>
              <input 
                type="checkbox"
                name={label}
                className={[multiples].join(' ')} 
                id="Todos"
                onClick={() => setAll(all ? false : true)}
                onChange={handleChange}
                checked={multiple && all ? true : null}
                value="Todos"
                ref={options}
              />
              <label for="Todos" onClick={textOption} style={{marginTop: '6px'}} >Todos</label>
            </div>
          :null}
          {search ? 
            <div style={{margin: '10px 0'}}>
              <input 
                type="text" 
                placeholder="Buscar"
                className={['search'].join(' ')} 
                onChange={buscador}
                ref={buscar}
              />
              <i className={['Iconsearch'].join(' ')}><AiOutlineSearch /></i>
              <button className={['Iconcancel']} onClick={reset}><MdCancel /></button>
            </div>
          :null}
          {option.map(item => (
            item.title ? 
              <div>
                <div className={['itemTitle', `C${colorSecondary}` ].join(' ')}>
                  {item.title}
                </div>
                {item.values.map((itemOptions, index) => 
                  <div className={['option'].join(' ')} style={multiple ? {padding: '5px'}: null} >
                    <input 
                      type={multiple ? 'checkbox' : "radio"} 
                      name={label}
                      className={[multiples].join(' ')} 
                      id={itemOptions}
                      onClick={handleChange}
                      onChange={onChange} 
                      checked={multiple && all ? true : null}
                      value={itemOptions}
                      ref={options}
                    />
                    <label for={itemOptions} onClick={()=> textOption(index)} style={multiple ? {marginTop: '6px'} : null} >
                      {itemOptions}
                      {item.subTitle ?
                        <div>
                          {item.subTitle[index]}
                        </div>
                      : null}
                    </label>
                </div>
                )}
              </div>
            :
            <div className={['option'].join(' ')} style={multiple ? {padding: '5px'}: null}>
              <input 
                type={multiple ? 'checkbox' : "radio"}  
                name={label}
                className={[multiples].join(' ')} 
                ref={options}
                id={item} 
                value={item}
                onClick={handleChange}
                checked={multiple && all ? true : null}
                onChange={onChange} />
              <label for={item} onClick={textOption} style={multiple ? {marginTop: '6px'} : null} >{item}</label>
            </div>
          ))}
          {button ? 
            <Button 
              style={{bottom: '0px', position: 'sticky'}} 
              buttonRadius={false} 
              fixed 
              color={colorSecondary}
              onClick={onClick}
            >
              <input
                type="radio"
                id="butonradio"
                onClick={()=> setActivate(false)}
                style={{visibility:'hidden', margin: '0', marginLeft: '-12.22px'}}
              />
              <label for="butonradio">{textButton}</label>
            </Button> 
          :null}
        </div>
        <div 
          className={['selected', `B${color}`, borders, size, paddings].join(' ')}
          onClick={()=> setActivate(activate ? false : disabled ? false : true)}
          style={multiple && state[0] ? {height: '42px'} : null}
        >
          {multiple ? 
            <div className="containerMultiple">
              {state[0] ? 
                state.map(item => (
                  <div className={['itemOption', `B${color}`].join(' ')}>
                    {item}
                  </div>
                )) 
              : 'Seleccionar opciones' }
              
            </div> 
          :
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <div>
                {state[0] ? state[0] : 'Selecciona una opcion' }
              </div>
              <div style={{fontSize: '10px', paddingTop: '3px'}}>
                {position && option[0].subTitle ? option[0].subTitle[position] : null}
              </div>
            </div>
          }
          <div style={{color: "#969494"}}>
            <TiArrowUnsorted />
          </div>          
        </div>
      </div>
      {error ?
        <div className={['containerAccion'].join(' ')} >
          <RiErrorWarningFill />
          {textError}
        </div>
      :null}
      {success ?
        <div className={['containerAccion'].join(' ')} >
          <AiFillCheckCircle />
          {textScuccess}
        </div>
      :null}
    </div>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  colorSecondary: PropTypes.oneOf(backgroundColors),
  data: PropTypes.array,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small','medium','large',]),
  border: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  textScuccess: PropTypes.string,
  textError: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func,
  search: PropTypes.bool,
  onClick: PropTypes.func,
  valueDefault: PropTypes.string,
};

Select.defaultProps = {
	color: 'baseBlue',
  colorSecondary: 'G100',
  data: [],
  multiple: false,
  error: false,
  success: false,
  disabled: false,
  size: 'medium',
  border: true,
  search: false,
  valueDefault: '',
  onChange: ()=> {},
  onClick: ()=> {},
};
