// Custom middleware to log the method and URL of each request
module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware/handler
};
