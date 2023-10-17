import { foo } from '@lycolia/library-example-single';
import { hoge } from '@lycolia/library-example-multi/libs/utils/hoge';
import { PIYO } from '@lycolia/library-example-multi/libs/utils/piyo';
import { fuga } from './libs';

import { CORE } from '@lycolia/library-example-multi';
export const callFoo = (param: string) => {
  return foo(param);
};

export const callHoge = () => {
  return hoge(PIYO, 123);
};

console.log('callFoo', callFoo('abcd'));
console.log('callHoge', callHoge());
console.log('fuga', fuga({ num: 5, text: 'yyyy' }));
console.log(CORE);
