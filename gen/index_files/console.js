let percent = /\((\d+)%\)/

function rng(min, max) { return Math.floor(Math.random() * (max - min + 1) ) + min }
function pick(arr) { return arr[Math.floor(Math.random()*arr.length)] }
function bump() { 
    let e = $('#console').children().last(); let p = Number(e.html().match(percent)[1]);
    p += rng(5, 30)
    if (p > 100) p = 100
    e.html(e.html().replace(percent, `(${p}%)`))
    return (p == 100)
}

let step = 0
let blank = " (0%)"

// Obviously these responses are just randomly picked. Let me know if you have any funny suggestions.

let hack = {
    responses: [
        "Validating username",
        "Hacking mainframe",
        "Establishing connection",
        "Settling liquids",
        "Encrypting data",
        "Port forwarding",
        "Packaging data",
        "Injecting code",
        "sudo rm -rf /",
        "Downloading noot.exe",
        "sudo chmod 777 /",
        "Building terrain",
        "Calculating arena points",
        "POST to thisistotallyreal.php",
        "Skimming documentation",
        "Preparing injection script",
        "Backing up data",
        "Bruteforcing vault codes",
        "Generating XOR keys",
        "Hiding IP address",
        "Deciphering response",
        `Connecting to proxy server #${rng(11111, 99999)}`,
        "Deploying to production",
        "Establishing TCP connection",
        "Evading taxes",
        "Calculating CRC values",
        "Performing Lakitu skip",
        "Preheating to 350°",
        "Praying",
        "SQL Injecting",
        "Bruteforcing",
        "Transporting data",
        "Awaiting server response",
        "Generating arena points"],
    
    start: [
        "Connecting to Prodigy Game's server",
        "Connecting to PMGH API"
    ],

    end: [
        "Finalizing process"
    ]
}