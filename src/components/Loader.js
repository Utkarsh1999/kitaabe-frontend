import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Spinner animation="border" role="status" className="text-center mx-auto">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
