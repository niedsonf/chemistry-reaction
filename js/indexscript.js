function setGameVersion(btnId) {

    function createInstance(v){
        document.getElementById('gameholder').remove()
        var gameholder = document.createElement('div')
        gameholder.setAttribute('id', 'gameholder')
        var version = document.createElement('script')
        version.src = v
        gameholder.appendChild(version)
        document.getElementById('game').appendChild(gameholder)
    }

    if (btnId == 'alpha') {
        document.getElementById('alpha').className = 'btn btn-dark disabled'
        document.getElementById('atual').className = 'btn btn-dark'
        createInstance('./js/alpha.js')
    } 
    if(btnId == 'atual') {
        document.getElementById('alpha').className = 'btn btn-dark'
        document.getElementById('atual').className = 'btn btn-dark disabled'
        createInstance("./js/chemistry-reaction.js")
    }
}

