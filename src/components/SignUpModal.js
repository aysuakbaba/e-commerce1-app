import React, { useContext, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import cancel from "../assets/close.png";
import { CategoryContext } from "../context/categoryContext";



function SignUpModal(props) {

  const { handleRegister, registerError} = useContext(CategoryContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState("")
  const [surname , setSurname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegister(name, surname,email, password);
    if(!registerError){

      setName("")
      setSurname("")
      setEmail("")
      setPassword("")
    }
    props.toggle()
  }
  



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
          <label for="name">Name</label>
            <br />
            <input
              type="text"
              id="user-name"
              name="name"
              className="input-style"
              value={name}
              onChange= {(e) => setName(e.target.value)}
            />
            <br />
            <label for="surname">Surname</label>
            <br />
            <input
              type="text"
              id="user-surname"
              name="surname"
              className="input-style"
              value={surname}
              onChange= {(e) => setSurname(e.target.value)}
            />
            <br />
            <label for="email">E-mail</label>
            <br />
            <input
              type="email"
              id="user-email"
              name="email"
              className="input-style"
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
            />
            <br />
            {registerError && "This email is already used."}
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              id="user-password"
              name="password"
              className="input-style"
              value={password}
              onChange= {(e) => setPassword(e.target.value)}
            />
            <br />
          </form>
        </ModalBody>
        <div className="modalFooter">
          <button onClick={handleSubmit} className="modalButton top">
            Sign Up
          </button>{" "}
          <button className="modalButton bottom" onClick={props.toggle}>Sign In</button>
        </div>
      </Modal>
      

    </div>
  );
}

export default SignUpModal;
