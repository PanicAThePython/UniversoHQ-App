(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const urlHash = window.location.hash.split("#")[1]
        console.log(urlHash)
        if (urlHash) filterProfile(urlHash)
    })
})()