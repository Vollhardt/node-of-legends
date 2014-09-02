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

var objOrArrayToCsv = function(obj){
    return Array.isArray(obj) ? obj.join(",") : obj;
};

var isJson = function(str){
    var json = false;
    try {
        json = JSON.parse(str);
    }catch(e){}
    return json;
};

var isFunction = function (obj) {
    return obj && {}.toString.call(obj) == '[object Function]';
};

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

var makeErrorCallback = function(callback, statusCode, body){
    var message;
    if(!statusCode)
        statusCode = -34;
    switch(statusCode){
        case 400:
            message = 'bad request';
            break;
        case 401:
            message = 'unauthorized';
            break;
        case 404:
            message = 'data not found';
            break;
        case 429:
            message = 'rate limit exceeded';
            break;
        case 500:
            message = 'riot internal server error';
            break;
        case 503:
            message = 'riot service not available';
            break;
        default:
            var json = isJson(body);
            message = json && json.status ? json.status.message : 'riot unspecified error';
    }
    callback({status_code: statusCode, message: message},null);

};

exports.extend = extend;
exports.isJson = isJson;
exports.makeCallback = makeCallback;
exports.makeErrorCallback = makeErrorCallback;
exports.isFunction = isFunction;
exports.objOrArrayToCsv = objOrArrayToCsv;