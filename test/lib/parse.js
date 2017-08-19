/**
 * * Created by lee on 2017/8/18
 */
'use strict';

import test from 'ava';
import parse from '../../lib/parse';
import helper from '../../lib/helper';

function clear(){
    helper.exec('git config --unset-all user.name');
    helper.exec('git config --unset-all user.email');
}

function set(name, email){
    helper.exec(`git config user.name ${name}`);
    helper.exec(`git config user.email ${email}`);
}

test(t => {
    clear();
    t.deepEqual(parse(), {name: undefined, email: undefined});
});

// test(t => {
//     let name = 'lizheng11';
//     let email = 'lizheng11@meituan.com';
//     set(name, email);
//     t.deepEqual(parse(), {name, email});
// });