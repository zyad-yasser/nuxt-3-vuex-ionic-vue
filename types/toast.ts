const colors = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  light: 'light',
  medium: 'medium',
  dark: 'dark',
};

const nativePositions = {
  bottom: "bottom",
	center: "center",
	top: "top",
};

const ionicPositions = {
  bottom: "bottom",
	middle: "middle",
	top: "top",
};

type ToastColor = keyof typeof colors;
type NativeToastPosition = keyof typeof nativePositions;
type IonicToastPosition = keyof typeof ionicPositions;
type ToastPosition = NativeToastPosition | IonicToastPosition;