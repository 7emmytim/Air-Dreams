let form = document.querySelector('form')
let input = document.querySelectorAll('input')
let arr = []
form.addEventListener('submit', function (e) {
    for (let i = 0; i < input.length; i++) {
        arr.push({
            inputPlaceholder: input[i].placeholder,
            inputValue: input[i].value
        })
    }
    console.log(arr)
})



