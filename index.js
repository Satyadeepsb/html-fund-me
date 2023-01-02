import { ethers } from "./ethers-5.2.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")

connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            console.log(error)
        }
        console.log("Connected !!")
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        console.log("accounts", accounts)
        connectButton.innerHTML = "Connected"
    } else {
        connectButton.innerHTML = "Please install metamask"
    }
}
async function fund(ethAmount) {
    console.log(`Funding: `)
    console.log(ethAmount)
    if (typeof window.ethereum !== "undefined") {
        // provider / connection to the blockchain
        // signer / wallet / someone with gas
        // contract that we are interacting with
        // ^ ABI & Address
    }
}
