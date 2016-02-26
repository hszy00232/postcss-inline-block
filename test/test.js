import postcss from 'postcss';
import test    from 'ava';

import plugin from '../';

// let pro = postcss([plugin]).process("display:inline-block");

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

/* Write tests here */
test('is pass', t => {
    return run(t, 'a{display:inline-block;}', 'a{display:inline-block;*display:inline;*zoom:1;}');
});
