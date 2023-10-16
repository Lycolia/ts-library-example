import * as f from '@lycolia/library-example-single';
import { hoge } from '.';

// ローカルライブラリのモック
jest.mock('@lycolia/library-example-single');
describe('hoge', () => {
  it('mock', () => {
    // ローカルライブラリのスパイ
    const spy = jest.spyOn(f, 'foo').mockReturnValue('test');
    const actual = hoge('abcd', 5678);

    // スパイできていることを確認
    expect(spy).toHaveBeenCalledWith('abcd');
    // mockReturnValue()がReturnされることを確認
    expect(actual).toBe('test - 5678');
  });
});
