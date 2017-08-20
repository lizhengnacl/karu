/**
 * * Created by lee on 2017/8/18
 */
'use strict';

const { spawnSync } = require('child_process');
const log = require('./log');

exports.exec = function(cmd) {
    let parts = cmd.split(/\s+/g);
    let res = spawnSync(parts[0], parts.slice(1));
    if(res.status !== 0){
        log.error(res.stderr.toString());
        process.exit(1);
    }
    return res.stdout.toString();
};

exports.isEmpty = function(value) {
    return value === void 0;
};