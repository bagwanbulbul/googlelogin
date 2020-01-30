var express = require("express");
var app = express();
var passport = require("passport")
var googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new googleStrategy({
        clientID:"705017352828-7snpbirm226mkd93aschifu0u5g8g4ou.apps.googleusercontent.com",
        clientSecret:"2SE33dI5a3Z3nsCenzy9Myqp",
        callbackURL:"/auth/google/callback"
    },
    function (accessToken, refreshToken, profile,done){
        console.log("access token",accessToken);
        console.log("refress token",refreshToken);
        console.log("profile", profile);
        console.log("done",done)

    })
)
app.get("/auth/google",passport.authenticate("google",{
    scope:["profile","email"]
}))

app.listen(3000,()=>{
    console.log("server is listning on 3000...")
})