# IPV4-tool

This tool is written in Node.js to automatically replace hostnames inside a set of files. These files can be configured inside an array of strings.

You can change the following code to specify the files you'd like to change with this tool:
```JS
const filesToReplace = [
    './App.tsx',
    './Test.tsx'
];
```

## Usage

Run this to replace ipv4 with localhost:
```BASH
node replace-ipv4.js
```

Run this to replace localhost with ipv4:
```BASH
node replace-localhost.js
```

## Further development
If anyone can make a Python version of this program feel free to send a pullrequest from this branch:
https://github.com/veslav3/ipv4-hostname-tool/tree/python