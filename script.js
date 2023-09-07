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

// adding more fields in form
const addEduSec = () => {
    // resume
    const eduSec = document.getElementById('edu-sec-resume')

    // // form
    const eduSecForm = document.getElementById('edu-sec-form');
    const containerForm = document.getElementById('edu-container-form');

    const copiedEduSecForm = eduSecForm.cloneNode(true);

    const inputFields = copiedEduSecForm.querySelectorAll('input');
    inputFields.forEach(input => input.value = '');

    containerForm.appendChild(copiedEduSecForm);
}

const saveEdu = () => {
    const ed = document.getElementsByClassName('ed')
    console.log(ed)
    let eduArr = []
    for (let i = 0; i < ed.length / 6; i++) {
        if(ed[i * 6 + 0].value !== '')
        eduArr.push({
            school: ed[i * 6 + 0].value,
            degree: ed[i * 6 + 1].value,
            score: ed[i * 6 + 2].value,
            start: ed[i * 6 + 3].value,
            end: ed[i * 6 + 4].value,
            city: ed[i * 6 + 5].value
        })
    }
    localStorage.setItem('edu', JSON.stringify(eduArr));

}

// retrive data form local storage
const getData = () => {
    Array.from(formData).forEach(element => {
        element.value = localStorage.getItem(element.id)
    })
    // get edu
    let eduArr = localStorage.getItem('edu')
    eduArr = JSON.parse(eduArr);
    console.log(eduArr)
    eduArr.forEach(e => addEduSec())
    const ed = document.getElementsByClassName('ed')
    for (let i = 0; i < (ed.length / 6) - 1; i++) {
        ed[i * 6 + 0].value = eduArr[i].school
        ed[i * 6 + 1].value = eduArr[i].degree
        ed[i * 6 + 2].value = eduArr[i].score
        ed[i * 6 + 3].value = eduArr[i].start
        ed[i * 6 + 4].value = eduArr[i].end
        ed[i * 6 + 5].value = eduArr[i].city
    }
}

// generate resume
const generate = () => {
    const formFields = document.getElementsByClassName('form-field')
    saveData(formFields)
    saveEdu()
    Array.from(resumeFields).forEach(element => {
        element.innerText = formFields[element.id].value
    });

    //skills
    const skillContainer = document.getElementById('skill-container')
    let skills = document.getElementById('form-skills').value.split(',')
    skills = skills.map(elem => elem.trim())
    var skillList = []
    skills.forEach(skill => {
        skillList.push(`<li><h4>${skill}</h4></li>`)
    })
    skillContainer.innerHTML = skillList.join('')

    // links
    const linkCont = document.getElementById('link-container')
    let link = document.getElementById('link').value.split(',')
    link = link.map(elem => elem.trim())
    let linkList = []
    link.forEach(elem => {
        linkList.push(`<li><h4><a href='${elem}'>${elem}</h4></li>`)
    })
    linkCont.innerHTML = linkList.join('')

    // edu
    let eduArr = JSON.parse(localStorage.getItem('edu'))
    const eduResume = document.getElementById('edu-container-resume')
    eduResume.innerHTML = ''
    eduArr.forEach(elem => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div id="edu-sec-resume">
        <h3>
        <span class="resume-field" id="school">${elem.school}</span>
        <span class="resume-field" id="city">${elem.city}</span>
        </h3>
        <ul>
        <li><div class="resume-field" id="degree">${elem.degree}</div></li>
        <li>
        <div>
        <span class="resume-field" id="start-date">${elem.start}</span>
        <span> - </span>
        <span class="resume-field" id="end-date">${elem.end}</span>
        </div>
        </li>
        <li><div>Score: <span class="resume-field" id="score">${elem.score}</span></div></li>
        </ul>
        </div>
    `
        eduResume.appendChild(div)
    })

    // profile photo
    document.getElementById('profile').src = formData.photo.value
}

// eventlistner for enter
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        generate()
        // document.getElementById('close-btn').click()
    }
})


// generate()
getData()