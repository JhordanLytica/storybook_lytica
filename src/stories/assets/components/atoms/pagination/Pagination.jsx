import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

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
/**
 * Primary UI component for user interaction
 */
export const Pagination = ({ variant, disabled, color, backgroundColor, length }) => {
  const disable = disabled ? 'disabled' : '';
	const [count, getCount] = useState({
    start: 0,
    end: 10,
    startPag: 0,
    endPage: 3,
    page: 1,
  });
  //validar si los numeros son divisibles entre 10
  let num = Math.trunc(length / 10) < length / 10
  ? Math.trunc(length / 10) + 1
  : Math.trunc(length / 10);
  
  useEffect(() => {
    if (variant === 'compact') getCount({...count, endPage: num});
  }, []);
  // array para numeros
  const numbers = [];

  //llenar array con la numeracion 
  for (let index = 1; index <= num; index += 1) {numbers.push(index);}

  //Incrementar o decrementar el numero de las paginas
  const paginado = numero => {
    const cont = numero * 10;
    let startPage = 0;
    let endPagev = 3;

    //mostrar los tres numeros anteriores al actual
    if (numero - 3 > 0) startPage = numero - 3;
    else startPage = 0;

    //mostrar los tres numeros posteriores al actual
    if (numero + 2 <= numbers.length) endPagev = numero + 2;
    else endPagev = numbers.length;

    getCount({
      ...count,
      start: cont - 10,
      end: cont,
      startPag: startPage,
      endPage: endPagev,
      page: numero,
    });
  };

  const anterior = () => {
    if (count.page !== 1) {
      return getCount({...count, page: count.page - 1});
    }
  }

  const siguiente = () => {
    if (count.page < count.endPage) {
      return getCount({...count, page: count.page + 1});
    }
  }

  switch (variant) {
    case 'compact':
      return (
        <div className={['medium', 'compact'].join(' ')}>
          Pagina {count.page} de {count.endPage}
          <button 
            type="button"
            disabled={!!(count.page === 1)}
            style={count.page === 1 ? {color: '#585757'}: null}
            onClick={anterior}
            title="Anterior"
          >
            {'< Anterior'}
          </button>
          <button 
            type="button"
            disabled={!!(count.page === count.endPage)}
            style={count.page === count.endPage ? {color: '#585757'}: null}
            onClick={siguiente}
            title="Siguiente"
          >
            {'Siguiente >'}
          </button>
          Pagina {count.page} de {count.endPage}
        </div>
      );  
    case 'default':
      return (
        <div className={['center', 'pagination', disable].join(' ')}>
          {num >= 2 ? (
            numbers < 3 ? (
              <div className={['center'].join(' ')}>
                {numbers.map(items => (
                  <button
                    disabled={disabled}
                    className={
                    items === count.page ? 
                      ['buttonActivate', 'medium', backgroundColor, `C${color}` ].join(' ') 
                    : 
                      ['buttons', 'small'].join(' ')
                    }
                    type="button"
                    onClick={() => paginado(items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            ) : (
              <div className={['center'].join(' ')}>
                {count.startPag >= 1 ? 
                  <div style={{color: 'black'}}>
                    <button
                        className={
                          count.page === 0 ?
                            ['buttonActivate', 'medium', backgroundColor, `C${color}` ].join(' ') 
                          : 
                            ['buttons', 'small'].join(' ')
                        }
                        type="button"
                        onClick={() => paginado(1)}
                        disabled={disabled}
                    >
                    1
                    </button>
                    ...
                  </div> 
                : null }
                {numbers.slice(count.startPag, count.endPage).map(items => (
                  <button
                    className={
                    items === count.page ? 
                      ['buttonActivate', 'medium', backgroundColor, `C${color}` ].join(' ') 
                    : 
                      ['buttons', 'small'].join(' ')
                    }
                    type="button"
                    onClick={() => paginado(items)}
                    disabled={disabled}
                  >
                    {items}
                  </button>
                ))}
                {numbers.length > count.endPage ? (
                  <div style={{color: 'black'}}>
                    ...
                    <button
                      className={
                        numbers.length === count.page ?
                          ['buttonActivate', 'medium', backgroundColor, `C${color}` ].join(' ') 
                        : 
                          ['buttons', 'small'].join(' ')
                      }
                      type="button"
                      onClick={() => paginado(numbers.length)}
                      disabled={disabled}
                    >
                      {numbers.length}
                    </button>
                  </div>
                ) : null}
              </div>
            )
          ) : null}
        </div>
      )
  }
};

Pagination.propTypes = {
  color: PropTypes.oneOf(Colors),
  backgroundColor: PropTypes.oneOf(Colors),
  variant: PropTypes.oneOf(['default', 'compact']),
  disabled: PropTypes.bool,
  length: PropTypes.number,
};

Pagination.defaultProps = {
	color: 'CG500',
  backgroundColor: 'baseBlue',
  variant: 'default',
  disabled: false,
  color: 'baseBlue',
  length: 50,
};
