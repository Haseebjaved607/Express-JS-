import shortid from "shortid";
import URL from "../model/url.js";

const  handleGenerateNewShortUrl=async(req, res) =>{
    const body = req.body
    // console.log(req.body);
    if (!body.url) return res.status(400).json({ error: "url is required" })
    const shortID = shortid(8)
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })

}

 const redirectUrlToWeb=async(req, res) =>{
    // console.log(req.params)
    // return 
    try {
        const { shortId } = req.params;
        // console.log(shortId)
        // return 
        const entry = await URL.findOneAndUpdate({
            shortId
        }, {
            $push: {
                visitHistory: {
                    timestamps: Date.now(),
                }
            }
        })

        // console.log("entry", entry)
        res.redirect(entry?.redirectUrl)
    } catch (error) {
        console.log(error.message);
    }
}

const handleGetAnalytic=async(req, res) =>{
    // console.log(req.params);
    const { shortId } = req.params
    // return 
    // const {shortId} = req.params;
    const result = await URL.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytic: result.visitHistory,
    })
}
export { handleGenerateNewShortUrl, redirectUrlToWeb, handleGetAnalytic };
