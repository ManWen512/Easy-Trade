import Profile from "./Pages/Profile";
import SideMenu from "./Components/SideMenu";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route} from 'react-router-dom';
import FriMenu from "./Components/FriendMenu";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="3">
            <SideMenu />
          </Col>
          <Col>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </Col>
          <Col md="3">
            <FriMenu />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
