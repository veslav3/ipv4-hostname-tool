'use strict';

var os = require('os');
var fs = require('fs');

var ifaces = os.networkInterfaces();

const filesToReplace = [
    './App.tsx',
    './Test.tsx'
];

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    } else {
      const ipv4 = iface.address;
      console.log('Your IP address is: ', ipv4);
      filesToReplace.forEach(fileName => {
        fs.readFile(fileName, 'utf8', (err, data) => {
          if (err) return console.log(err);
          var result = data.replace('127.0.0.1', ipv4).replace('localhost', ipv4);
        
          fs.writeFile(fileName, result, 'utf8', err => {
             if (err) return console.log(err);
          });
        });
      });
    }
    ++alias;
  });
});
