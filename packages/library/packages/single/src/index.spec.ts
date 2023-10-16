import { foo } from '.';

// テスト
describe('foo', () => {
  it('return param', () => {
    expect(foo('hoge')).toBe('hoge');
  });
});
