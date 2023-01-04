import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const defaultIsChecked = {
  isFalse: false,
  isTrue: true,
};

const SummaryForm = () => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(false);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setOrderPhase("completed");
  }
  function setOrderPhase(name) {}

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = () => {
    <span>
      checkbox
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>;
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          id="checkbox"
          checked={isTrue}
          onChange={(e) => setIsTrue(e.target.checked)}
          label={checkboxLabel}
          name="checkbox"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isTrue}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm();
