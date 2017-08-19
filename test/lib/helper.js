/**
 * * Created by lee on 2017/8/18
 */
'use strict';

import test from 'ava';
import helper from '../../lib/helper';

test(t => {
    let {isEmpty} = helper;
    t.deepEqual(isEmpty(undefined), true);
    t.deepEqual(isEmpty(''), false);
});