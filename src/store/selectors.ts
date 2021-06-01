import { createSelector, Selector } from 'reselect';

// others
import { TMainState } from '../types';

// store
import { channelsLoadedSelector } from './channels/selectors';
import {
  errorMessageSelector,
  isPendingSelector as isPendingAuthSelector,
} from './auth/selectors';
import { profilesLoadedSelector } from './profiles/selectors';

export const isAuthenticatedSelector: Selector<TMainState, boolean> =
  createSelector(
    isPendingAuthSelector,
    errorMessageSelector,
    (isPending, errorMessage) => !isPending && !errorMessage
  );

export const appDataLoadedSelector: Selector<TMainState, boolean> =
  createSelector(
    profilesLoadedSelector,
    channelsLoadedSelector,
    (profilesData, channelsData) => profilesData && channelsData
  );
