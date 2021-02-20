import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Form, Button, Container, Row } from 'react-bootstrap';

const H1 = styled.h1`
    color: #282c34;
    margin: 0 auto;
    padding: 50px 0;
    font-size: 48px;
    font-size: 48px;
    letter-spacing: -1.5px;
`

export const Addcampaign = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [segment_id, setSegment_id] = useState("");
  const [media, setMedia] = useState("");
  const { addCampaign, campaigns } = useContext(GlobalContext);
  const {segments} = React.useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const newCampaign = {
      id: campaigns.length + 1,
      name,
      text,
      status: "Preview",
      segment_id,
      media,
      stats: null
    };
    addCampaign(newCampaign);
    history.push("/");
  };

  const handleSelectChange = (value) => {
    const selectedSegment = segments.filter(segment => segment.name === value);
    setSegment_id(selectedSegment[0].id);
  }


  return (
    <Container>
      <Row>
        <div className="col-6 mt-5">
          <H1>Add Campaign</H1>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Segment</Form.Label>
              <Form.Control as="select" onChange={e => handleSelectChange(e.target.value)}>
                {segments.map(segment => {
                    return (
                      <option key={segment.id}>{segment.name}</option>
                    )
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Add Photo or Gif</Form.Label>
              <Form.Control
                type="media"
                placeholder="Enter url"
                value={media}
                onChange={e => setMedia(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="mt-2"
                as="textarea"
                rows="3"
                placeholder="Enter text"
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Campaign
            </Button>

            <Link to="/">
                <Button variant="outline-danger" type="button" className="m-5">Cancel</Button>
            </Link>
          </Form>
        </div>
      </Row>
    </Container>
  );
};