
import shortid from "shortid";
import userModel from "../models/schema.js"

// const handlesmallIdGenerator = async (req, res) => {

//     try {
//         const body = req.body
//         if (!body.url) return res.status(400).json({ error: "url is required" })
//         const shortID = shortid(8)
//         await userModel.create({
//             smallId: shortID,
//             orignalUrl: body.url,
//             visitHistory: [],
//         })
//         return res.render("forntend", {
//             id: shortID
//         })
//     } catch (error) {
//         console.log(error.message)
//     }
// }
const  handlesmallIdGenerator=async(req, res) =>{
    const body = req.body
    console.log(req.body);
    // return 
    if (!body.url) return res.status(400).json({ error: "url is required" })
    const shortID = shortid(8)
    await userModel.create({
        smallId: shortID,
        orignalUrl: body.url,
        visitHistory: [],
    })
    return res.render("forntend", {
        id: shortID
    })
    // return res.json({ id: shortID })

}
const handleuseShortUrl = async (req, res) => {
    // console.log(req.params);
    // return
    try {
        const { smallId } = req.params
        // console.log(smallId);
        // return
        const entry = await userModel.findOneAndUpdate({
            smallId
        }, {
            $push: {
                visitHistory: {
                    timestamps: Date.now(),
                }
            }
        })
        res.redirect(entry?.orignalUrl)
    } catch (error) {
        console.log(error.message)
    }
}

const handleGetAnalytic=async(req, res) =>{
    // console.log(req.params);
    const { smallId } = req.params
    // return 
    // const {shortId} = req.params;
    const result = await userModel.findOne({ smallId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytic: result.visitHistory,
    })
}


export { handlesmallIdGenerator, handleuseShortUrl , handleGetAnalytic}