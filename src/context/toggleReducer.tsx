export interface ToggleState {
  isDarkMode: boolean;
}

export type ToggleAction = {type: 'toggle'};

export const toggleReducer = (
  state: ToggleState,
  action: ToggleAction,
): ToggleState => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };

    default:
      return state;
  }
};
