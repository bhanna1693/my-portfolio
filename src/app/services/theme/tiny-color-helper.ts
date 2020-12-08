import {ColorInput} from 'tinycolor2';
import * as tinycolor from 'tinycolor2';
import {Color} from './theme.service';

export class TinyColorHelper {
  static computeColors(hex: ColorInput): Color[] {
    return [
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(52), '50'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(37), '100'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(26), '200'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(12), '300'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(6), '400'),
      TinyColorHelper.getColorObject(tinycolor(hex), '500'),
      TinyColorHelper.getColorObject(tinycolor(hex).darken(6), '600'),
      TinyColorHelper.getColorObject(tinycolor(hex).darken(12), '700'),
      TinyColorHelper.getColorObject(tinycolor(hex).darken(18), '800'),
      TinyColorHelper.getColorObject(tinycolor(hex).darken(24), '900'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      TinyColorHelper.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
  }

  static getColorObject(value: ColorInput, name: string): Color {
    const c = tinycolor(value);
    return {
      name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  }
}
