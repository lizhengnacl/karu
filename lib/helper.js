/**
 * * Created by lee on 2017/8/18
 */
'use strict';

const { spawnSync } = require('child_process');

exports.exec = function(cmd) {
    let parts = cmd.split(/\s+/g);
    return spawnSync(parts[0], parts.slice(1)).stdout.toString();
};

exports.isEmpty = function(value) {
    return value === void 0;
};