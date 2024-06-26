
import shortid from "shortid";
import userModel from "../models/modl.js"

//now we have to make controller
//function to make short url

async function GenerateNewShortUrl(req, res) {
    const body = req.body
    // console.log(req.body);
    if (!body.url) return res.status(400).json({ error: "url is required" })
    const shortID = shortid(8)
    await userModel.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })

}

async function redirectUrlToWeb(req, res) {
    const shortid = req.param.shortid;
    const entry = await userModel.findOneAndUpdate({
        shortid
    }, {
        $push: {
            visitHistory: {
                timestamps: Date.now(),
            }
        }
    })
    res.redirect(entry.redirectUrl)

}




async function handleGetAnalytic(req, res) {

    const id = req.param.id;
    const result = await userModel.findOne({ id })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytic: result.visitHistory,
    })
}

export { GenerateNewShortUrl, redirectUrlToWeb, handleGetAnalytic };