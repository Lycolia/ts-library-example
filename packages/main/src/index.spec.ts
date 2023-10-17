import { callFoo, callHoge } from '.';

describe('callFoo', () => {
  it('test', () => {
    const actual = callFoo('asdf');
    expect(actual).toBe('asdf');
  });
});

describe('callHoge', () => {
  it('test', () => {
    const actual = callHoge();
    expect(actual).toBe('ぴよ - 123');
  });
});
