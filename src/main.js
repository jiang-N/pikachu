import string from './css.js'

const player = {
    id: undefined,
    time: 40,
    n: 0,
    demoString: '',
    ui: {
        demo: document.querySelector('#demo'),
        style: document.querySelector('#style')
    },
    init: () => {
        player.ui.style.innerHTML = string.substring(0, player.n)
        player.ui.demo.innerText = string.substring(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        if (string[player.n] === '\n') {
            player.demoString += '<br>'
        } else if (string[player.n] === ' ') {
            player.demoString += '&nbsp;'
        } else {
            player.demoString += string[player.n]
        }
        if (player.n > string.length - 1) {
            player.pause
            return
        }

        player.ui.style.innerHTML = string.substring(0, player.n)
        player.ui.demo.innerHTML = player.demoString
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        player.n += 1

    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 50
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()