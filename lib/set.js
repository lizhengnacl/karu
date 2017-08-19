/**
 * * Created by lee on 2017/8/19
 */
'use strict';

const helper = require('./helper');
module.exports = set;

function set(answers){
    Object.keys(answers).forEach((key) => {
        helper.exec(`git config user.${key} ${answers[key]}`)
    });
}