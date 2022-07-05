const withAuth = (req, res, next) => {

    //If user is not logged in and try to access other page, it will redirect them to sign in
    if (!req.session.loggedIn) {
        res.redirect("/sign-in");
    } else {
        next();
    }
};

//Export the withAuth
module.exports = withAuth;