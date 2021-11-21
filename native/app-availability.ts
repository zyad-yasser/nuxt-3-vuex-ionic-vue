import { AppAvailability } from '@ionic-native/app-availability';
import { AppPackageNames } from '~~/types/app-availability';
import { isIos } from './device';

export const isAvailable = async (appPackageNames: AppPackageNames) => {
  const accessor = await isIos() ? 'ios' : 'android';
  const appName = appPackageNames[accessor];
  return AppAvailability.check(appName);
}

export const appAvailability = {
  isAvailable
};
