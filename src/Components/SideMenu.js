
import "./SideMenu.css";
import {NavLink} from 'react-router-dom';

function SideMenu() {
  return (
    <div>
      <div className="menu">
        <div className="menuicon">
            <NavLink to='/' exact className='homemenu' activeClassName='activemenu'>Home</NavLink>
        </div>
        <div className="menuicon">
            <NavLink to='/profile' className='profilemenu' activeClassName='activemenu'>Profile</NavLink>
        </div>
        <div className="menuicon">
            <div className="settingmenu">setting</div>
        </div>

      </div>
    </div>
  );
}
export default SideMenu;
