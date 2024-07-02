import jwt from "jsonwebtoken"
export const checkAuth = (req, res, next) => {
    try {
        // console.log(req.cookies);
        const token = req.cookies.jwt
        // console.log(token)
        const isCheck = jwt.verify(token, process.env.SCERET_KEY)
        // console.log("ischeck", isCheck)
        if (isCheck) {
          next()
        }

        // next()

    } catch (error) {
        return res.redirect("/api/login")
    }
}