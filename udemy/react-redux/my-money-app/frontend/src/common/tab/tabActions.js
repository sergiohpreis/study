export const selectTab = tabId => {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    };
};