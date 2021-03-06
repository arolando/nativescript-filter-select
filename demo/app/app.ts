﻿import * as application from 'application';
application.getResources();
var resources = [];
resources['flags'] = function (value) {
    return 'http://flags.fmcdn.net/data/flags/h80/' + value.toLocaleLowerCase() + '.png';
};

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
 
TNSFontIcon.debug = false; 
TNSFontIcon.paths = {
  'fa': 'font-awesome.css',
  'ion': 'ionicons.css'
};
TNSFontIcon.loadCss();

resources['fonticon']=fonticon;

application.setResources(resources);
var imageCache = require("nativescript-web-image-cache");
if(application.android)
application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    try {
        imageCache.initialize();
    } catch (error) {
        console.error('error', error)
    }
});



application.start({ moduleName: "main-page" });
