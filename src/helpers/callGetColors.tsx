import {getImageColor} from './getColors';

export const callGetColors = async (uri: string) => {
  const [primary, secondary] = await getImageColor(uri);
  if (primary && secondary) {
    return {primary, secondary};
  } else {
    return {primary: 'transparent', secondary: 'transparent'};
  }
};
