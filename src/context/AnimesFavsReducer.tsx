import {Data} from '../interfaces/AnimeDetail';
import {animeFavsState} from './AnimesFavsContext';
type AuthAction =
  | {type: 'addAnimeFav'; payload: Data}
  | {type: 'removeAnimeFav'; payload: Data};

export const AnimeFavsReducer = (
  state: animeFavsState,
  action: AuthAction,
): animeFavsState => {
  switch (action.type) {
    case 'addAnimeFav':
      return {
        ...state,
        animeFavsState: [...state.animeFavsState, action.payload],
      };

    case 'removeAnimeFav':
      return {
        ...state,
        animeFavsState: state.animeFavsState.filter(
          anime => anime.mal_id !== action.payload.mal_id,
        ),
      };

    default:
      return state;
  }
};
