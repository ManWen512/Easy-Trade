import { useEffect } from "react";
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";
import Feeds from "./Feeds";
import History from "./History";
import Likes from "./Likes";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    fetch("http://easy-trade-app.herokuapp.com/users/");
  }, []);

  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="profile">
        <div className="profilediv">
          <div className="coverphoto"></div>
          <div className="profilephoto">
            <div className="profilephoto1"></div>
          </div>
          <div className="editbtn">Edit Profile</div>
        </div>
        <div>
          <div className="nftabs">
            <div>
              <NavLink to={`${url}`} exact className="tab1" activeClassName="activetab">
                feeds
              </NavLink>
            </div>
            <div>
              <NavLink
                to={`${url}/likes`}
                className="tab2"
                activeClassName="activetab"
              >
                Likes
              </NavLink>
            </div>
            <div>
              <NavLink
                to={`${url}/history`}
                className="tab3"
                activeClassName="activetab"
              >
                History
              </NavLink>
            </div>
          </div>
        </div>

        <Switch>
          <Route path={path} exact>
            <Feeds />
          </Route>
          <Route path={`${path}/likes`}>
            <Likes />
          </Route>
          <Route path={`${path}/history`}>
            <History />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
