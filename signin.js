var express = require("express");
var app = express();
// var google = require("googleapis");
var googleSignin = require("google-sign-in")

var project = new googleSignin.Project("705017352828-7snpbirm226mkd93aschifu0u5g8g4ou.apps.googleusercontent.com")
project.verifyToken("https://oauth2.googleapis.com/token")
.then((data)=>{
    console.log(JSON.stringify(data));
}).catch((error)=>{
    console.error(error.message)
})