export const selectTab = tabId => {
    console.log(tabId);
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    };
};