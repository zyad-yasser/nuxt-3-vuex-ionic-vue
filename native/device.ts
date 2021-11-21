import { Device } from '@capacitor/device';

const { getInfo, getId } = Device;

export const isIos = async () => {
  const platform = await getPlatformName();
  return platform === 'ios';
};

export const isAndroid = async () => {
  const platform = await getPlatformName();
  return platform === 'android';
};

export const isMobile = async () => {
  const isMobile = await isAndroid() && await isIos();
  return isMobile;
};

const getPlatformName = async () => {
  const info = await getInfo();
  const { platform } = info;
  return platform;
};

export const device = {
  getId,
  getInfo,
  getPlatformName
}