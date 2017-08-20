/**
 * * Created by lee on 2017/8/20
 */
'use strict';

const chalk = require('chalk');

module.exports = {
    error(msg){
        console.log(chalk.red(msg));
    },
    success(msg){
        console.log(chalk.green(msg));
    },
    tips(msg = ''){
        console.log(msg);
    }
};