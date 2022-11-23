import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

const WarningSign = (props) => (
  <Alert variant={props.danger}> {props.infomation} </Alert>
);

export default WarningSign;
