import React from 'react';
import { GlobalContext } from "../context/GlobalState";

import { Table, Container, Row } from 'react-bootstrap';


export const LiveCampaigns = () => {
    const {campaigns} = React.useContext(GlobalContext);
    const liveCampaigns = campaigns.filter(campaign => campaign.status === 'Sent');

    return (
        <Container>
            <Row>
                <div className="col-12 mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Live (sent) Campaigns</th>
                                <th>Amount Sent</th>
                                <th>Click Through Rates</th>
                            </tr>
                        </thead>
                        <tbody>
                            {liveCampaigns.map(campaign => {
                                return (
                                    <tr key={campaign.id}>
                                        <td>{campaign.name}</td>
                                        <td>{campaign.stats.sent}</td>
                                        <td>{campaign.stats.clicked}</td>
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
