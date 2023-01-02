async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    console.log("Connected !!");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("accounts", accounts);
    document.getElementById("connectButton").innerHTML = "Connected";
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install metamask";
  }
}
