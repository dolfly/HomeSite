/**
 * Copyright 2014 eRealm Info & Tech.
 *
 * Created by Ken on 2/08/2014
 */

'use strict';


var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var pkg = require(rootPath + '/package.json');

module.exports = {
    root: rootPath,
    serverRoot: rootPath + '/app',
    clientRoot: rootPath + '/public',
    port: process.env.PORT || 3000,
    blog: {
        API_KEY: process.env.BLOG_KEY
    },
    app: {
        name: process.env.NODE_ENV === 'production' ? pkg.name + ' (' + pkg.version + ')' : pkg.name + ' [' + pkg.version + ']',
        version: pkg.version,
        description: pkg.description
    },
    mail: {
        enable: true,
        transport: 'SMTP',
        fromaddress: ' eRealm Info & Tech <hello@erealm.cn>',
        options: {
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        }
    },
//    dbManage:process.env.DB_MANAGE,
//    dbManage:'wojiubuxinninengcaidao',
    support: 'hello@erealm.cn',
    projectName: 'eRealm-Home',
    copyrightName: 'eRealm'
};
