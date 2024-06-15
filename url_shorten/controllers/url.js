import shortid from "shortid";
import URL from "../model/url.js";

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body
    console.log(req.body);
    if (!body.url) return res.status(400).json({ error: "url is required" })
    const shortID = shortid(8)
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })

}

async function redirectUrlToWeb(req, res) {
    const shortid = req.param.shortid;
    const entry = await URL.findOneAndUpdate({
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
    const result = await URL.findOne({ id })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytic: result.visitHistory,
    })
}
export { handleGenerateNewShortUrl, redirectUrlToWeb, handleGetAnalytic };
