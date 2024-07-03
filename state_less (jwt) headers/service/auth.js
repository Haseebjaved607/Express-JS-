import jwt from 'jsonwebtoken';
const secret = "Hasii!@#123";

function setUser(user) {
    return jwt.sign({
        _id: user?._id,
        email: user?.email
    }, secret);
}

async function getUser(token) {
    if (!token) return null;
    try {
        // console.log("Token:", token);
        // console.log("Secret:", secret);
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("JWT verification error:", error);
        return null;
    }
}

export { setUser, getUser };
