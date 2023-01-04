import { Row, Card, Col } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
const CardeList = ({ cardData }) => {
  return (
    <Row>
      <Slide left>
      {cardData.length >= 1 ? (
        cardData.map((card) => {
          return (
            <Col key={card.id} sm="12" className="mb-3">
              <Card className="d-flex flex-row crad">
                <Card.Img
                  className="img-carde"
                  variant="top"
                  src="download.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <div className="d-flex justify-content-between">
                      <div className="item-title">{card.title}</div>
                      <div className="itme-price">{card.price}</div>
                    </div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">
                    {card.description}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">There are no items</h3>
      )}
      </Slide>
    </Row>
  );
};

export default CardeList;
