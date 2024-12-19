const checkboxEl = document.querySelector('.teme-checkbox')
const textEl = document.querySelector('.text')

checkboxEl.addEventListener('change', () => {
    console.log(checkboxEl.checked)
    if (checkboxEl.checked) {
        localStorage.setItem("theme", "black");
    } else {
        localStorage.setItem("theme", "white")
    }

    if (localStorage.getItem('theme') === 'white') {
        textEl.classList.add('black-text')
        document.body.classList.add('white-bc')

        textEl.classList.remove('white-text')
        document.body.classList.remove('black-bc')
        console.log('white')
    } else {
        textEl.classList.remove('black-text')
        document.body.classList.remove('white-bc')

        textEl.classList.add('white-text')
        document.body.classList.add('black-bc')
        console.log('black')
    }
})

// ===

const formEl = document.querySelector('form')

formEl.addEventListener('change', (e) => {
    localStorage.setItem('inputName', '')
    localStorage.setItem('inputEmail', '')

    if (e.target.name) {
        const textNameJSON = JSON.stringify(e.target.value)
        localStorage.setItem('inputName', textNameJSON)
        // console.log(textNameJSON)
    }

    if (e.target.emil) {
        const textEmailJSON = JSON.stringify(e.target.value)
        localStorage.setItem('inputEmail', textEmailJSON)
       console.log(textEmailJSON)
    }

    // if (e.target.checkbox) {
    //     const textCheckboxJSON = JSON.stringify(e.target.value)
    //     localStorage.setItem('inputCheckbox', textCheckboxJSON)
    // }
    console.log(e.target.value)
})






