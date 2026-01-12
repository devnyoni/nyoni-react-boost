 export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const data = JSON.parse(req.body);
    const channelLink = data.link;
    const amount = data.qty;

    // HAPA NDIPO UNAPOUNGANISHA NA SMM GATEWAY
    // Kwa sababu HTML pekee haina akaunti, inabidi iite "Jeshi la Boti"
    try {
        console.log(`ACTING ON CHANNEL: ${channelLink} WITH ${amount} REACTIONS`);
        
        // Hapa unaweza kuweka API call kwenda kwenye SMM Server
        // fetch(`https://smm-server.com/api/v2?key=YOUR_KEY&action=add&link=${channelLink}&quantity=${amount}`);

        return res.status(200).json({ success: true, message: "Reactions Activated" });
    } catch (e) {
        return res.status(500).json({ success: false });
    }
}
