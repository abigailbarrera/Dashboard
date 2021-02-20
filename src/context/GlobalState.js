import React, { createContext, useReducer } from "react";
import AppReducer from "../AppReducer";

import data from '../data/campaigns.json';

const initialState = {
    campaigns: data.campaigns,
    segments: data.segments
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addCampaign(campaigns) {
    dispatch({
      type: "ADD_CAMPAIGNS",
      payload: campaigns
    });
  }

  function editCampaign(campaigns) {
    dispatch({
      type: "EDIT_CAMPAIGN",
      payload: campaigns
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        campaigns: state.campaigns,
        segments: state.segments,
        addCampaign,
        editCampaign
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};