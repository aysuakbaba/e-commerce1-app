import React from "react";
import { Modal, ModalBody } from "reactstrap";
import cancel from "../assets/close.png";
import SignUpModal from "./SignUpModal";

function LogInModal(props) {
  const [signUpModal, setSignUpModal] = React.useState(false);

  function signUpToggle() {
    setSignUpModal((prevSignUpModal) => !prevSignUpModal);
  }

  function handleClick() {
    props.toggle();
    signUpToggle();
  }

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} centered="lg">
        <div className="head-top">
          <header className="modalHeader">Sign In</header>
          <button className="cancel" onClick={props.toggle}>
            <img src={cancel} alt="cancel" />
          </button>
        </div>
        <ModalBody className="modalBody">
          <form className="modal_form">
            <label for="email">E-mail</label>
            <br />
            <input
              type="email"
              id="user-email"
              name="email"
              className="input-style"
            />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              id="user-password"
              name="password"
              className="input-style"
            />
            <br />
            <div className="remember">
              <input type="checkbox" id="remember_me" name="rememberMe" />
              <label for="remember"> Remember me</label>
              <br />
            </div>
          </form>
        </ModalBody>
        <div className="modalFooter">
          <button onClick={props.toggle} className="modalButton top">
            Sign In
          </button>{" "}
          <button onClick={handleClick} className="modalButton bottom">
            Register
          </button>
        </div>
      </Modal>
      <SignUpModal modal={signUpModal} toggle={handleClick} signUpToggle={signUpToggle} />
    </div>
  );
}

export default LogInModal;
