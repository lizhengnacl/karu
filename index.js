/**
 * * Created by lee on 2017/8/19
 */
'use strict';

const parse = require('./lib/parse');
const helper = require('./lib/helper');
const prompt = require('./lib/prompt');
const set = require('./lib/set');

module.exports = setConfig;

const _questions = {
    name: {
        type: 'input',
        name: 'name',
        message: 'What\'s your git user name'
    },
    email: {
        type: 'input',
        name: 'email',
        message: 'What\'s your git user email',
        validate: function(value) {
            if(/.+@.+\..+/.test(value)) {
                return true;
            }

            return 'Please enter a valid user email';
        }
    }
};

function setConfig(){
    let config = parse();

    let questions = [];

    if(helper.isEmpty(config.name)) {
        questions.push(_questions.name);
    }

    if(helper.isEmpty(config.email)) {
        questions.push(_questions.email);
    }

    prompt(questions).then(function(answers){
        set(answers);
    });
}