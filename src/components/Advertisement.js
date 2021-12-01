import { Image, Col } from "react-bootstrap";

const Advertisement = () => {
  return (
    <div className="row">
      <Col md="auto" className="mx-auto">
        <Image
          src="https://res.cloudinary.com/dzwj8f2jn/image/upload/v1638340154/my-ad_x0tsfn.png"
          fluid
        />
      </Col>
    </div>
  );
};

export default Advertisement;
