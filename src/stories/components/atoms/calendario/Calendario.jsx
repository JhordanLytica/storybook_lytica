import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import './calendario.css';

export const Calendario = ({fecha, maxDate, minDate}) => {
  const [value, onChange] = useState(new Date(fecha));
  const maxfecha =new Date(maxDate);
  const minfecha = new Date(minDate);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        navigationLabel={({ date }) => date.toLocaleDateString('es-MX',{  year: 'numeric', month: 'long' }).replace('de',  '')}
        maxDate={maxfecha}
        minDate={minfecha}
      />
    </div>
  );
};

Calendario.propTypes = {
  fecha: PropTypes.string,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
};
//const fechasA = new Date();
Calendario.defaultProps = {
  fecha: new Date(),
  maxDate: "3000-01-01",
  minDate: "0-01-01",
};
