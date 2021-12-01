import {palette} from './palette';

export const shadow = {
  noShadow: {
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  primaryShadow: {
    elevation: 5,
    shadowColor: palette.almostBlackGrey,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: {
      height: 6,
      width: 0,
    },
  },
  filterHeaderShadow: {
    elevation: 5,
    shadowColor: palette.almostBlackGrey,
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  secondaryShadow: {
    elevation: 2,
    shadowColor: palette.almostBlackGrey,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: {
      height: 6,
      width: 0,
    },
  },
};
