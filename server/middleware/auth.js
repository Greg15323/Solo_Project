import jwt from 'jsonwebtoken';

// Wants to like a post
// Click the like button => auth middleware (NEXT) => like controller

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustumAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test' );

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decoded(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;