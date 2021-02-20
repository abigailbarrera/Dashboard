import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
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

export const Editcampaign = route => {
  let history = useHistory();
  const {segments} = React.useContext(GlobalContext);
  const { campaigns, editCampaign } = useContext(GlobalContext);
  const [selectedCampaign, setSeletedCampaign] = useState({
    id: null,
    name: "",
    text: "",
    status: "Preview",
    segment_id: "",
    media: "",
    stats: null
  });
  const currentCampaignId = route.match.params.id;

  useEffect(() => {
    const selectedCampaign = campaigns.find(camp => camp.id === parseInt(currentCampaignId));
    setSeletedCampaign(selectedCampaign);

  }, [currentCampaignId, campaigns]);

  const onSubmit = e => {
    e.preventDefault();
    editCampaign(selectedCampaign);
    history.push("/");
  };

  const handleOnChange = (campaignKey, value) => {
    setSeletedCampaign({ ...selectedCampaign, [campaignKey]: value });
  }

  const handleSelectChange = (campaignKey, value) => {
    const selectedSegment = segments.filter(segment => segment.name === value);
    setSeletedCampaign({ ...selectedCampaign, [campaignKey]: selectedSegment[0].id});
  }

  return (
    <Container>
      <Row>
        <div className="col-6 mt-5">
          <H1>Edit Campaign</H1>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={selectedCampaign.name}
                onChange={e => handleOnChange("name", e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Segment</Form.Label>
              <Form.Control as="select" onChange={e => handleSelectChange("segment_id", e.target.value)}>
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
                value={selectedCampaign.media}
                onChange={e => handleOnChange("media", e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={selectedCampaign.text}
                onChange={e => handleOnChange("text", e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>

            <Link to="/">
                <button type="button" className="btn btn-link m-5">Cancel</button>
            </Link>
          </Form>
        </div>
      </Row>
    </Container>
  );
};