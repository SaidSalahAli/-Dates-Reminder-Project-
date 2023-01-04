import { Col, Row } from "react-bootstrap";

const Category = ({ filterData, allCategories }) => {

  const hndelClick = (cat) => {
    filterData(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col  sm="12" className="d-flex justify-content-center txet-center ">
        {allCategories.length >= 1 ? (
          allCategories.map((a) => {
            return (
              <div >
                <button key={a.id}
                  onClick={() => hndelClick(a)}
                  className="btn-style mx-2">
                  {a}
                </button>
              </div>
            );
          })
        ) : (
          <h1>said</h1>
        )}
      </Col>
    </Row>
  );
};

export default Category;
