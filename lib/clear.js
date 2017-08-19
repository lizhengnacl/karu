/**
 * * Created by lee on 2017/8/19
 */
'use strict';
const helper = require('./helper');

function clear(){
    helper.exec('git config --unset-all user.name');
    helper.exec('git config --unset-all user.email');
}

module.exports = clear;