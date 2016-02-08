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
// template when it is updated and right after the
// initial Upscore call.
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

/* All files after overriding Upscore's
// initialization will NOT be made into
// Underscore templates, only AFTER the
// files have been updated will they be
// made into Underscore templates.
*/

var upscore = require("upscore");

upscore.initialize = false;
```

**Override Polling Interval**

```javascript
'use strict';

/* This will change all Upscore'd files
// to poll every 100 milliseconds, only
// ones that occur after this property
// override.
*/

var upscore = require("upscore");

upscore.interval = 100;
```
