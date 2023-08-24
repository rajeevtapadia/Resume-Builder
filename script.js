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


// retrive data form local storage


// generate resume
const generate = () => {
    Array.from(resumeFields).forEach(element => {
        console.log(element)
        // if(!formData[element.id])
            element.innerText = formData[element.id].value
    });
}
// generate()