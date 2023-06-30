;(function () {
    const hexaValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    function getRandomNumber() {
        return Math.floor(Math.random() * hexaValues.length)
    }

    document.addEventListener('click', function (e) {
        const elTarget = e.target.getAttribute('data-action')
        const textValue = document.getElementById('hex-color')
        const actions = {
            change() {
                let hexaColor = '#'
                for (let i = 0; i < 6; i++) {
                    hexaColor += hexaValues[getRandomNumber()]
                }
                document.body.style.backgroundColor = hexaColor
                textValue.textContent = hexaColor
            },
            copy() {
                navigator.clipboard.writeText(textValue.innerHTML).then(() => {
                    document.querySelector('.tip').textContent = 'texto copiado.'
                    tip.classList.add('show')
                })
            },
            reset() {
                const initialColor = '#FFFFFF'
                document.body.style.backgroundColor = initialColor
                textValue.textContent = initialColor
            }
        }
        actions[elTarget] && actions[elTarget]()
    })

    const copyText = document.getElementById('copy-text')

    copyText.addEventListener('mouseover', function () {
        const tip = this.previousElementSibling
        tip.classList.add('show')

        function blur() {
            tip.textContent = 'copiar texto.'
            tip.classList.remove('show')
        }
        copyText.addEventListener('mouseleave', blur)
        copyText.addEventListener('blur', blur)
    })
})()
