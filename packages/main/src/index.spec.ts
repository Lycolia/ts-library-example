import { CORE } from '@lycolia/library-example-multi';
import { callFoo, callHoge } from '.';

describe('callFoo', () => {
  it('複数パスからのimportをテストできる', () => {
    const actual = callFoo('asdf');
    expect(actual).toBe('asdf');
  });
});

describe('callHoge', () => {
  it('複数パスからのimportをテストできる', () => {
    const actual = callHoge();
    expect(actual).toBe('ぴよ - 123');
  });
});

describe('CORE', () => {
  it('package.jsonのmainで定義されたものをテストできる', () => {
    expect(CORE).toBe('CORE');
  });
});
