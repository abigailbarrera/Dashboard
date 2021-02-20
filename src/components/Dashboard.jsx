import React from 'react';
import styled from 'styled-components';

import { LiveCampaigns } from './LiveCampaigns';
import { OpenCampaigns } from './OpenCampaigns';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    justify-content: center;
`

const H1 = styled.h1`
    color: #282c34;
    margin: 0 auto;
    padding: 50px 0;
    font-size: 64px;
    font-size: 67px;
    letter-spacing: -1.5px;
`

export const Dashboard = () => {
    return (
        <Container>
            <H1>Dashboard</H1>

            <LiveCampaigns />
            <OpenCampaigns />
        </Container>
    )
}
