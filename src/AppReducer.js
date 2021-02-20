export default (state, action) => {
    switch (action.type) {
      case "ADD_CAMPAIGNS":
        return {
          ...state,
          campaigns: [...state.campaigns, action.payload]
        };
      case "EDIT_CAMPAIGN":
        const updatedCampaign = action.payload;
  
        const updatedCampaigns = state.campaigns.map(campaign => {
          if (campaign.id === updatedCampaign.id) {
            return updatedCampaign;
          }
          return campaign;
        });
  
        return {
          ...state,
          campaigns: updatedCampaigns
        };
      default:
        return state;
    }
  };
