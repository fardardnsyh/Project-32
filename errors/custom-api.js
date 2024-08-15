// custom error class that extends built in error class
// constructor takes msg param and pass to parent err class constructor using super()
// thereby setting msg property of err to passed val
// custom class also adds statuscode.
// this class throws errs with specific http stat codes.

class CustomAPIError extends Error {
    constructor(message) {
        super(message)
    }
}

export default CustomAPIError