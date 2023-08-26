// get all resume fields
    // common resume-field class to get the elements
    // unique id to access single elements
const resumeFields = document.getElementsByClassName('resume-field')
console.log(resumeFields)

// form button functionality


// get all form data
const formData = document.getElementsByClassName('form-field')
console.log(formData);
// console.log(formData['name']);


// save all data to localstorage
const saveData = (formFields) => {
    // const formFields = document.getElementsByClassName('form-field')
    Array.from(formFields).forEach((element) => {
        localStorage.setItem(element.id, element.value)
    })
}


// retrive data form local storage
const getData = () => {
    Array.from(formData).forEach(element => {
        element.value = localStorage.getItem(element.id)
    })
}

// generate resume
const generate = () => {
    const formFields = document.getElementsByClassName('form-field')
    saveData(formFields)
    Array.from(resumeFields).forEach(element => {
        element.innerText = formFields[element.id].value
    });
    const skillContainer = document.getElementById('skill-container')
    let skills = document.getElementById('form-skills').value.split(',')
    skills = skills.map(elem => elem.trim())
    skills.forEach(skill => {
        skillContainer.innerHTML += `<li><h3>${skill}</h3></li>`
    })
}

// eventlistner for enter
document.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        generate()
        document.getElementById('close-btn').click()
    }
})
// generate()
getData()