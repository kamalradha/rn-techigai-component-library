import {palette} from './palette';

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The screen background.
   */
  background: palette.lightestGrey,
  /**
   * The main tinting color.
   */
  primary: palette.basePurple,
  /**
   * The main tinting color, but darker.
   */
  primaryLighter: palette.lightPurple,
  /**
   * The default color of text in many components.
   */
  text: palette.almostBlackGrey,
};
