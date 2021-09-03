import React from 'react';
import PropTypes from 'prop-types';
import { Caps } from '../../atoms/caps/Caps';
import { Title } from '../../atoms/title/Title';
import { Badge } from '../../atoms/badge/Badge';
import './card.css';

const backgroundColors = [
  'backgroundDarkPrimary',
  'backgroundDarkSecondary',
  'backgroundLightPrimary',
  'backgroundLightSecondary',
];

export const Card = ({ title, text, incr, badge, background}) => {
  return (
    <div className={['containerCard', background, 'shadow'].join(' ')}>
      <Caps align="justify" bold color="DP60" size="medium">{title}</Caps>
      <Title variant="h2" align="left" color="DB60">{text}</Title>
      <div className={['badgeContainer',].join(' ')}>
        <Badge 
          color={incr ? 'baseBlue' : 'DO20'}
          text={`${badge}%`}
          background={incr ? 'LB60' : 'LO60'}
          incr={incr}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  incr: PropTypes.bool,
  badge: PropTypes.string.isRequired,
  background: PropTypes.oneOf(backgroundColors),
};

Card.defaultProps = {
	title: 'PASANTES',
  text: '198k',
  badge: '10',
  incr: false,
  background: 'backgroundLightPrimary',
};