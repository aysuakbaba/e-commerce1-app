import React from "react";
import { Modal, ModalBody } from "reactstrap";
import cancel from "../assets/close.png";


function SignUpModal(props) {
  



  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} centered="lg">
        <div className="head-top">
          <header className="modalHeader">Sign Up</header>
          <button className="cancel" onClick={props.signUpToggle}>
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
            <div className="date">
              <label for="date">Birthday</label>
              <input type="date" id="date-time" name="date" />

              <br />
            </div>
          </form>
        </ModalBody>
        <div className="modalFooter">
          <button onClick={props.toggle} className="modalButton top">
            Sign Up
          </button>{" "}
          <button className="modalButton bottom" onClick={props.toggle}>Sign In</button>
        </div>
      </Modal>
      

    </div>
  );
}

export default SignUpModal;
