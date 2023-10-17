import { foo } from '.';

// テスト
describe('foo', () => {
  it('return param', () => {
    const actual = foo('hoge');

    expect(actual).toBe('hoge');
  });
});
