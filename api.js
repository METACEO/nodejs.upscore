'use strict';

var FS    = require("fs");
var READ  = FS.readFileSync;
var STAT  = FS.stat;
var WATCH = FS.watchFile;
var _     = require("underscore");

function upscore(
  file,
  callback
){
  
  if(typeof file !== "string") throw new Error("The file reference must be a string type.");
  
  if(typeof callback !== "function") throw new Error("The callback must be a function.");
  
  STAT(
    file,
    stat.bind(null,file,callback)
  );
}

upscore.interval = 1000;

function stat(
  file,
  callback,
  error,
  stats
){
  
  if(error !== null) throw error;
  
  if(stats.isFile() !== true) throw new Error("File must be a file type.");
  
  WATCH(
    file,
    {
      "interval": upscore.interval,
      "persistent": false
    },
    watch.bind(null,file,callback)
  );
}

function watch(
  file,
  callback,
  current,
  previous
){
  
  if(current.mtime === previous.mtime) return;
  
  STAT(
    file,
    execute.bind(null,file,callback)
  );
}

function execute(
  file,
  callback,
  error,
  stats
){
  
  if(
    error === null
    &&
    stats.isFile() === true
    &&
    typeof callback === "function"
  ){
    
    callback(_.template(READ(file,"utf-8")));
  }
}

module.exports = upscore;

