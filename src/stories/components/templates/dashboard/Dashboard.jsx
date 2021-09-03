import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './dashboard.css';
import { Menu } from '../../molecules/menu/Menu';
import { List } from '../../molecules/list/List'
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import { Lista } from '../../atoms/lista/Lista';
import { IoMdDownload } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
// imagenes
import Lytica from '../../images/lytica.png';
//icons
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillGrid3X3GapFill, BsLayoutTextWindow } from 'react-icons/bs';
import { MdSecurity, MdSettings } from 'react-icons/md';

const opcionMenu = ['option1','option2','option3'];
const dataList = [
  {
    data: [
      {
        func: () => {},
        icon: <RiDashboardFill />,
        itemList: 'Dashboard'
      },
      {
        func: function noRefCheck() {},
        icon: <BsFillGrid3X3GapFill />,
        itemList: 'Locaciones'
      },
      {
        func: function noRefCheck() {},
        icon: <MdSecurity />,
        itemList: 'Área'
      },
      {
        func: function noRefCheck() {},
        icon: <BsLayoutTextWindow />,
        itemList: 'Mapas de calor'
      },
      {
        func: function noRefCheck() {},
        icon: <BsLayoutTextWindow />,
        itemList: 'Comparador'
      }
    ],
    title: 'MAIN MENU'
  },
  {
    data: [
      {
        func: function noRefCheck() {},
        icon: <MdSettings />,
        itemList: 'Configuración'
      }
    ],
    title: 'GENERAL'
  }
];

export const Dashboard = ({ children, logo, opcionMenu, dataList, user, avatar }) => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });
  window.onscroll = function() {
    if(window.scrollY <= 120) {
      setScroll({...scroll, y: window.scrollY, x: window.scrollX});
    } else if (window.scrollY > 120 && scroll.y < 120) {
      setScroll({...scroll, y: 120, x: window.scrollX});
    } else {
      setScroll({...scroll, x: window.scrollX});
    }
  };

  return (
    <div className={['dashboard'].join(' ')}>
      <Menu
        logo={logo}
        options={opcionMenu}
        user={user}
        avatar={avatar ? avatar : null}
        height={50}
        width={180}
      />
      <List
        left={0-scroll.x}
        top={120-scroll.y}
        height="100%"
        width="272px"
        variant="vertical"
      >
        <Lista
          primary="DP60"
          secondary="G500"
          data={dataList}
        />
      </List>
      <div className={['dashboardContainer', 'backgroundLightSecondary'].join(' ')}>
        {children}
      </div>
      {scroll.y >= 120 ? 
        <List
          left={296-scroll.x}
          top={0}
          height="18px"
          width="1216px"
          variant="horizontal"
          background="DP40"
        >
          <Text color="G500" align="center" size="small" style={{margin: '0px'}} >Categoria (Todos)  Locaciones (Todos)  Mes actual (Ago 01 - ago) comparado con Mes anterior (Jul 01 - jul 19)</Text>
          <div style={{position: 'absolute', right: '36px', top: '4px'}}>
            <Button color="DP40" onClick={() => {}} variant="icon" classtyle="butonMenu">
              <IoMdDownload />
            </Button>
            <Button color="DP40" onClick={() => window.scrollTo(0,0)} variant="icon" classtyle="butonMenu">
              <MdModeEdit />
            </Button>
          </div>
        </List>
      :null}
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.string,
  opcionMenu: PropTypes.array,
  dataList: PropTypes.array,
  user: PropTypes.string,
  avatar: PropTypes.string,
};

Dashboard.defaultProps = {
	logo: Lytica,
  user: "Jhordan",
  opcionMenu: opcionMenu,
  dataList: dataList,
  avatar: "https://lytica.ai/wp-content/uploads/2021/02/20.png",
};