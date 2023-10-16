import { foo } from '@lycolia/library-example-single'

export const hoge = (param1: string, param2: number) => {
    // ローカルライブラリを参照して呼び出し
    const resultFoo = foo(param1);
    return `${resultFoo} - ${param2}`;
}
