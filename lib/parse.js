/**
 * * Created by lee on 2017/8/18
 */
'use strict';

const helper = require('./helper');
let config = helper.exec('git config --list --local');

module.exports = parse;

const n = 'user.name=';
const e = 'user.email=';

function parse() {
    let name, email;

    config.split('\n').forEach((c) => {
        if(c.indexOf(n) !== -1) {
            name = c.replace(new RegExp(n, 'g'), '');
        }
        if(c.indexOf(e) !== -1) {
            email = c.replace(new RegExp(e, 'g'), '');
        }
    });

    return { name, email }
}