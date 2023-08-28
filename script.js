// get all resume fields
// common resume-field class to get the elements
// unique id to access single elements
const resumeFields = document.getElementsByClassName('resume-field')
console.log(resumeFields)

// form button functionality


// get all form data
const formData = document.getElementsByClassName('form-field')
console.log(formData);


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
    var skillList = []
    skills.forEach(skill => {
        skillList.push(`<li><h3>${skill}</h3></li>`)
    })
    skillContainer.innerHTML = skillList.join('')
}

// eventlistner for enter
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        generate()
        // document.getElementById('close-btn').click()
    }
})

// adding more fields in form
const addEduSec = () => {
    // resume
    const eduSec = document.getElementById('edu-sec-resume')
    // const container = document.getElementById('edu-container-resume')
    // container.appendChild(eduSec)

    // // form
    const eduSecForm = document.getElementById('edu-sec-form');
    const containerForm = document.getElementById('edu-container-form');

    const copiedEduSecForm = eduSecForm.cloneNode(true);

    const inputFields = copiedEduSecForm.querySelectorAll('input');
    inputFields.forEach(input => input.value = '');

    containerForm.appendChild(copiedEduSecForm);
}
// generate()
getData()