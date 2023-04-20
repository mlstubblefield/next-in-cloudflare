// import { get } from "@vercel/edge-config"
// import { GetEdgeFeatureFlags, EncodeEdgeFeatureFlags } from 'Clutch/Utilities/EdgeFeatureFlags'

export default async function handler(req, res) {
    await res.revalidate(`/isr/${req.params.number}`);
    res.status(200).json({ success: "probably" })
}