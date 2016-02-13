# upscore

[![Dependency Status](https://david-dm.org/metaceo/nodejs.upscore.svg)](https://david-dm.org/metaceo/nodejs.upscore)

*Module to provide back Underscore templates on updated files...* **up**dated-under**score**.

```
$ npm install upscore
```

## Usage

Provide Upscore a file path and a callback. When the file is modified the callback will be called with an Underscore template based upon the file. The default polling interval is one second, or 1,000 milliseconds, override this with Upscore's `.interval` property before Upscore'ing a file. Upscore'd files are automatically initialized, override this with Upscore's `.initialize` property.

**General Example**

```javascript
'use strict';

var upscore = require("upscore");

/* The file below will be made into an Underscore
// template when a poll is made and a change is
// found. With default Upscore settings, as below,
// initialization will call the newTemplate function
// (this saves us unnecessary reads and templating.)
*/

upscore("./template.html",newTemplate);

function newTemplate(
  newTemp
){
  
  console.log(newTemp(data));
}
```

**Disable Initialization**

```javascript
'use strict';

/* All future files will not be automatically
// made into Underscore templates. This will
// not change the initialization of previously
// Upscore'd files.
*/

var upscore = require("upscore");

upscore.initialize = false;
```

**Override Polling Interval**

```javascript
'use strict';

/* This will have all future Upscore'd files
// poll for changes every 100 milliseconds.
// This will not change the polling interval
// of previously Upscore'd files.
*/

var upscore = require("upscore");

upscore.interval = 100;
```
