export interface AppState {
    appLoading: boolean;
    sidePanelOpened: boolean;
}

export const APP_STATE_DEFAULT: AppState = {
    appLoading: false,
    sidePanelOpened: false
};
