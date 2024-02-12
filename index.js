var domains = ["stoveandgrillparts.com", "pellet-stove-parts-4less.com"];

    // Check if we have the "test" parameter in the URL
    var urlParams = new URLSearchParams(window.location.search);
    var isTest = urlParams.has('test');
if (!domains.includes(window.location.hostname)) {

    // If the "test" parameter is present, add a console log of the result
    if (isTest) {
        console.log("*** THIS IN AN UNAUTHORIZED DOMAIN ***");
    }
    var meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex";
    document.getElementsByTagName('head')[0].appendChild(meta);
}

if (!isTest) {
    console.log("This domain is OK.");
}