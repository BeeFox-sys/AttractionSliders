function share(){
    url = window.location.host + window.location.pathname
    url += "?masc="+encodeURI(document.getElementById("masc").value)
    url += "&androg="+encodeURI(document.getElementById("androg").value)
    url += "&fem="+encodeURI(document.getElementById("fem").value)
    url += "&desc="+encodeURI(document.getElementById("textbox").value)
    navigator.clipboard.writeText(url).then(function() {
    alert("Copied url to clipboard!");
    })
}

function onload(){
    url = window.location.search.substring(1)
    if(!url) return
    vars = url.split("&")
    jsonv = {}
    vars.forEach(variable => {
        entry = variable.split("=")
        jsonv[entry[0]]=decodeURIComponent(entry[1])
    });
    document.getElementById("masc").value = jsonv.masc
    document.getElementById("androg").value = jsonv.androg
    document.getElementById("fem").value = jsonv.fem
    document.getElementById("textbox").value = jsonv.desc
}