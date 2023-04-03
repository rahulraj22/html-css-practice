// first receive all deleted data from localStorage
let archArray = JSON.parse(localStorage.getItem('arch'));

let archNoteDiv = document.getElementById('archNotes');

showDeleted();

function showDeleted(){
    let delNoteHTML = '';
    for(let i = 0; i < archArray.length; ++i){
        delNoteHTML += 
        `
            <div class="note">
                <div class="title">${archArray[i].title}</div>
                <div class="text">${archArray[i].text}</div>
            </div>
        `
    }
    archNoteDiv.innerHTML = delNoteHTML;
}