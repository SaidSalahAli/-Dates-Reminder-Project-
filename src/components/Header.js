import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center ">
        <div className="title">Food Menu</div>
        <div className="justify-content-center d-flex">
          <p className="inderline"></p>
        </div>
      </Col>
    </Row>
  );
};
export default Header;
