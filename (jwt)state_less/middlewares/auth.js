import { getUser } from "../service/auth.js"

async function restrictToLoggedUserOnly(req, res, next) {
    // console.log(req);
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect('/login')
    const user = await getUser(userUid)

    if (!user) return res.redirect("/login")

    req.user = user;
    next()
}

//chatgpt code
// async function restrictToLoggedUserOnly(req, res, next) {
//     const userUid = req.cookies?.uid;

//     if (!userUid) {
//         return res.redirect('/login');
//     }

//     try {
//         const user = await getUser(userUid); // Ensure getUser is awaited

//         if (!user) {
//             return res.redirect('/login');
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         console.error('Error fetching user:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

async function checkAuth(req, res, next) {
    // console.log(req);    
    const userUid = req.cookies?.uid;
    // console.log("userUid",userUid);
    // if (!userUid) return res.redirect('/login')
    const user = getUser(userUid)
    if (!user) return res.redirect("/login")    
    req.user = user;
    next()
}

export { restrictToLoggedUserOnly, checkAuth }