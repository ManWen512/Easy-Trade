import "./Feeds.css";
import { Row, Col } from "react-bootstrap";

function Feeds() {
  return (
    <div>
      <div className="feeddiv">
        <Row>
          <Col xs="2">
            <div className="feedpfp"></div>
          </Col>
          <Col xs="10">
            <div className="feedname">Natan</div>
            <div className='feedphoto'></div>
          </Col>
        </Row>
        <div className="react">like comment share</div>
      </div>

      <div className="feeddiv">
        <Row>
          <Col xs="2">
            <div className="feedpfp"></div>
          </Col>
          <Col xs="10">
            <div className="feedname">Natan</div>
            <div className='feedphoto'></div>
          </Col>
        </Row>
        <div className="react">like comment share</div>
      </div>
    </div>
  );
}
export default Feeds;
