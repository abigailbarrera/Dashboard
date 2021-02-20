import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Table, Container, Row } from 'react-bootstrap';


export const OpenCampaigns = () => {
    const { campaigns, editCampaign } = useContext(GlobalContext);
    const openCampaigns = campaigns.filter(campaign => campaign.status !== 'Sent');
    const {segments} = React.useContext(GlobalContext);

    return (
        <Container>
            <Row>
                <div className="col-12 mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <Link to={`/add`}>
                                        <button type="button" className="btn btn-light btn-sm m-0">Create a new Campaign</button>
                                    </Link>
                                </th>
                                <th>Open (unsent) Campaigns</th>
                                <th>Target Segment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {openCampaigns.map(campaign => {
                                const segment = segments.filter(segment => segment.id === campaign.segment_id);

                                return (
                                    <tr key={campaign.id}>
                                        <td>
                                            <Link to={`/edit/${campaign.id}`}>
                                                <button type="button" className="btn btn-light btn-sm m-0" onClick={() => editCampaign(campaign.id)}>Edit Details</button>
                                            </Link>
                                        </td>
                                        <td>{campaign.name}</td>
                                        <td>{segment[0].name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </Row>
        </Container>
    )
}
