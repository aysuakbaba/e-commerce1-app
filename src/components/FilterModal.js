import React, {useState} from "react";
import { Modal, ModalBody } from "reactstrap";
import classes from "./FilterModal.module.css";
import check from "../assets/check.png";
import checked from "../assets/checked.png";
function FilterModal(props) {
  const [isApplyHovered, setIsApplyHovered] = useState(false);

  function applyHovered() {
    setIsApplyHovered(true);
  }

  function applyNotHovered(){
    setIsApplyHovered(false)
  }
  return (
    <>
      <Modal isOpen={props.isFilterOpened} centered="lg">
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
        <div className="modalFooter">
          <button className="cancel" onClick={props.toggleFilter} onMouseEnter={applyHovered} onMouseLeave={applyNotHovered}>
            <img src={isApplyHovered ? checked : check} alt="check" />
            <p>Apply</p>
          </button>
        </div>
      </Modal>
    </>
  );
}

export default FilterModal;
