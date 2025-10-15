const Jwt = require('jsonwebtoken');

export async function authMiddleware(req, res, next){
    const token = req.headers.token;

    try{
        //verify the token
        const isValidToken = await Jwt.verify(token,"JWT_SECRET");

        if(!isValidToken){
            res.json({
                response : "Invalid token"
            })
        }

        req.id = isValidToken._id;
        next();
    }
    catch(e){
        res.json({
            response : "server error"
        })
    }
}
