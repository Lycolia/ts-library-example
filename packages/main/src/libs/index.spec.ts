import * as P from '@lycolia/library-example-multi/libs/utils/piyo';
import { hoge } from '@lycolia/library-example-multi/libs/utils/hoge';

import { fuga } from '.';
jest.mock('@lycolia/library-example-multi/libs/utils/piyo');
describe('fuga', () => {
  it('複数のエンドポイントのexportをmock, spyできる', () => {
    const spy = jest.spyOn(P, 'strlen');
    const actualFuga = fuga({ num: 3, text: 'asdf' });

    expect(spy).toHaveBeenCalledWith('asdf');
    // strlenはmockされているのでNaN = param.num + undefined
    expect(actualFuga).toBeNaN();
  });

  it('異なるパスはモックされない', () => {
    const actual = hoge('qaz', 1);

    expect(actual).toBe('qaz - 1');
  });
});
