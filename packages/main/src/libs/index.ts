import { PIYO_T, strlen } from '@lycolia/library-example-multi/libs/utils/piyo';

export const fuga = (param: PIYO_T) => {
  return param.num + strlen(param.text);
};
