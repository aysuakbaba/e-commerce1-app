import React from "react";
import { Modal, ModalBody } from "reactstrap";
import classes from "./FilterModal.module.css";
import cancel from "../assets/close.png";

function FilterModal(props) {
  return (
    <>
      <Modal isOpen={props.isFilterOpened} centered="lg">
        <button className="cancel" onClick={props.toggle}>
          <img src={cancel} alt="cancel" />
        </button>
        <header className={classes.modalHeader}>Filter</header>
        <ModalBody className={classes.modalBody}>
          <div className={classes.block}>
            <h4>Sizes</h4>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>XXS</label>
            </div>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>XS</label>
            </div>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>S</label>
            </div>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>M</label>
            </div>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>L</label>
            </div>
          </div>
          <div className={classes.block}>
            <h4>Filter</h4>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>Artan fiyata göre</label>
            </div>
            <div className={classes.check}>
              <input type="checkbox" />
              <label>Azalan fiyata göre</label>
            </div>
          </div>
        </ModalBody>
        <div className="modalFooter"></div>
      </Modal>
    </>
  );
}

export default FilterModal;
