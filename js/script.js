const root = document.documentElement
const colorControls = document.querySelectorAll('#settings [data-id]')
const fontSize = document.getElementById('font-size')
const section2 = document.getElementById('section-2')

function hex2rgb(hex, alpha = false) {
    const result = []
    for (let i = 1; i <= 7; i++) {
        if (i % 2) {
            const value = parseInt(hex.slice(i, i + 2), 16)
            i == 7 ? result.push(value ? value : 1) : result.push(value)
        }
    }
    return alpha ? result : result.slice(0, 3)
}

function changeColor(e) {
    const color = hex2rgb(e.target.value).toString()
    root.style.setProperty(`--thorn-${e.target.dataset.id}`, `${color}`)
}

colorControls.forEach(control => { control.addEventListener('input', changeColor) })
fontSize.addEventListener('change', e => { root.style.fontSize = `${e.target.value}px` })