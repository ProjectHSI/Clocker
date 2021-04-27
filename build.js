console.log("Node.JS has loaded all essential libraries. Loading additional libraries...")
console.log("Loading ANSI-Colors...")
var ac = require("ansi-colors")
console.log("Loading of ANSI-Colors has finished...")
console.log("Loading NPM Log...")
var nl = require("npmlog")
console.log("Configurating NPM Log...")
nl.enableColor()
nl.enableUnicode()
nl.warn("Alert!", ac.bgYellowBright(ac.blackBright("Development build... Will assume default level of Infinite!")))
nl.level = Infinity
console.log("Loading of NPM Log has finished.")
console.log("Clearing Screen...")
//console.clear()

// Use NL below this line...

nl.verbose("Initalization", "Adding tracker objects...")

var ebr = nl.newItem("Prepare Electron Builder",1, 1)

var pszf = nl.newItem("Prepare Source Zip File", 3, 2)

var pszf = nl.newItem("Download Source Zip File", 1)

var userinterface = require("readline")

var userinterfacer = userinterface.createInterface({
    input: process.stdin,
    output: process.stdout
})

nl.info("Initalization", "Initalization Complete")

// unneeded things are unneeded...
// -----
// We don't load Electron Builder yet. As it's not needed.
// Nor https.

userinterfacer.question(`${ac.bgRedBright(ac.black("The building process may take a while to build"))}, both on Electron-Builder's side and your internet and hard drive speed, to continue. Type in: 'I agree', it can be in any case\n`, (string) => {
    if (string.toLowerCase() == "i agree") {
        console.log(string)
        console.log(string.toLowerCase())

        nl.verbose("Initalization", "Loading HTTPS.")

        var https = require("https")

        nl.verbose("Initalization", "Loading of HTTPS has finished...")

        nl.verbose("Initalization", "Enabling progress bar...")
        nl.enableProgress()

        setInterval(() => {
            nl.gauge.pulse()
        }, 100)

        nl.info("Initalizing...", "Requiring Electron-Builder...")
        var eb = require("electron-builder")
        ebr.completeWork(1)

        nl.info("Building...", "Downloading the latest version of Clocker, this may take a while.")
        
        // I'll work on this later.
        // I have to go to bed.
        // From past me: Remember to add the code that gets the current Source tar or some other format, then add the code that extracts said archive format. And puts it in the src folder of the current script.
        // If I have time, remember to add the building code.

        //process.exit(0)
    } else {
        userinterfacer.close()
        process.exit(0)
    }
})