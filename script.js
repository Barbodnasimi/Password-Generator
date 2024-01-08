let Password = ''
const length = 12
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?'
const btnGenerator = document.querySelector('button')
const Input = document.querySelector('#password')
const CopyText = document.querySelector('img')


function PasswordGenerator() {
    for (let i = 0; i < 12; i++) {
     let randomIndex =  Math.floor(Math.random() * charset.length)

       Password += charset.charAt(randomIndex)
    }
    Input.value = Password
    Password = ''
}

function CopytoCLipboard() {
    Input.select()
    document.execCommand('copy')
}

btnGenerator.addEventListener('click' , PasswordGenerator)
CopyText.addEventListener('click' ,CopytoCLipboard )