/* extend copyright:
    Copyright (c) 2012-2014 Raynos.

        Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/**
 * merges objects into one with later objects' properties taking precedence
 * @param {object} obj... objects to process
 * @returns {object}
 */
var extend = function() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source)
            if (source.hasOwnProperty(key))
                target[key] = source[key];
    }
    return target;
};

/**
 * converts numbers and strings and arrays of those types into a comma separated string
 * @param {number|number[]|string|string[]} obj object(s) to put into CSV string
 * @param {number?} [max] maximum number of objects to put into csv string. **note returns first MAX objects**
 * @returns {string} CSV string
 */
var objOrArrayToCsv = function(obj, max){
    return Array.isArray(obj) ? (max && max >= obj.length ? obj : obj.slice(0,max-1)).join(",") : obj;
};

/**
 * test if a string is JSON or not
 * @param {string} str string to test
 * @returns {boolean} true if str is JSON, false if not JSON
 */
var isJson = function(str){
    var json = false;
    try {
        json = JSON.parse(str);
    }catch(e){}
    return json;
};

/**
 * test if object is a function
 * @param {object} obj object to test
 * @returns {*|boolean} true if object is a function, false otherwise
 */
var isFunction = function (obj) {
    return obj && {}.toString.call(obj) == '[object Function]';
};

/**
 * test if object is a boolean
 * @param {object} obj object to test
 * @returns {*|boolean} true if object is a boolean, false otherwise
 */
var isBoolean = function(obj){
    return "boolean" === typeof obj;
};

/**
 * performs callbacks for API
 * @param {tacoAPICallback} callback function to callback to
 * @param {number?} httpStatusCode HTTP result code 404,200 etc
 * @param {string} json JSON to attach to callback
 */
var makeCallback = function(callback, httpStatusCode, json){
    var validJSON = isJson(json);
    if(validJSON) {
        if (200 == httpStatusCode)
            callback(null, validJSON);
        else
            callback(validJSON.status, null);
    }else
        callback(
            {
                status_code: httpStatusCode,
                message: (200 == httpStatusCode ? "invalid json returned from api call" : "error in API call and invalid json returned")
            }
        );
};

exports.extend = extend;
exports.isJson = isJson;
exports.makeCallback = makeCallback;
exports.isFunction = isFunction;
exports.isBoolean = isBoolean;
exports.objOrArrayToCsv = objOrArrayToCsv;
