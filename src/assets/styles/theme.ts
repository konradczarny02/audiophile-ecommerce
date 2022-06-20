type Color = string;

interface IColor {
  orange: Color;
  lightOrange: Color;
  white: Color;
  black: Color;
  lighterBlack: Color;
  gray: Color;
  lighterGray: Color;
}

type ThemeProps = { colors: IColor };

export const theme: ThemeProps = {
  colors: {
    orange: '#D87D4A',
    lightOrange: '#fbaf85',
    black: '#000000',
    white: '#ffffff',
    lighterBlack: '#101010',
    gray: '#fafafa',
    lighterGray: '#f1f1f1',
  },
};
