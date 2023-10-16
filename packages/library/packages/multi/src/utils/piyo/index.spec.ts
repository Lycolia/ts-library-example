import { PIYO, strlen } from '.';

// 普通のテストコード
describe('strlen', () => {
  it('mock', () => {
    const actual = strlen(PIYO);

    expect(actual).toBe(PIYO.length);
  });
});
