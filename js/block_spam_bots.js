var blocklink = [
    'http://darodar.com',
    'http://forum.topic54786022.darodar.com',
    'http://econom.co',
    'http://ilovevitaly.com',
    'http://ilovevitaly.co',
    'http://priceg.com',
    'http://blackhatworth.com',
    'http://hulfingtonpost.com'
];

function checkSpamBots() {
    console.log("Checking spam bots for referrer '".concat(document.referrer).concat("'"));

    for (var b = 0; b < blocklink.length; b++) {
        console.log("Checking match with ".concat(blocklink[b]));
        if (document.referrer.match(blocklink[b])) {
            window.location = "http://google.com/";
            console.log(blocklink[b].concat(" detected as spam bot. Block acces!"));
            return;
        }
    }
    console.log("No spam bot as referrer found!");
}