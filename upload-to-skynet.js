const { SkynetClient } = require("@skynetlabs/skynet-nodejs")

const client = new SkynetClient()

async function uploadToSkynet() {
    const skylink = await client.uploadDirectory("./relative-links-output")
    console.log(`Upload successful, skylink: ${skylink}`)
}

uploadToSkynet()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
