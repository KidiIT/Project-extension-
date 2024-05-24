/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

const fs = require('fs');

// update name, publisher, and description
const json = JSON.parse(fs.readFileSync(`./package.json`).toString());
const stableVersion = json.version.match(/(\d+)\.(\d+)\.(\d+)/);
const major = stableVersion[1];
const minor = stableVersion[2];

function prependZeros(n) {
	try {
		const num = parseInt(n, 10);
		return num.toString().padStart(2, '0');
	} catch {
		throw new Error('Expected a number to prepend zeros to!');
	}
}

// calculate patch
const date = new Date();
const patch = `${date.getFullYear()}${prependZeros(date.getMonth() + 1)}${prependZeros(
	date.getDate(),
)}${prependZeros(date.getHours())}`;

const version = `${major}.${parseInt(minor, 10) + 1}.${patch}`;

const nightlyPackageJson = {
	...json,
	...{
		version,
	},
};

console.log('Rewritten attributes: ');
console.log('  version: ' + nightlyPackageJson.version);

fs.writeFileSync(`./package.json`, JSON.stringify(nightlyPackageJson));
