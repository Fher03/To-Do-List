const checkbox = document.querySelector("#done");
const notes = document.querySelectorAll("#notes");



const notesArray = Array.from(notes);
console.log(notesArray);


notesArray.forEach(note => {
checkbox.addEventListener("change", ()=>{
        for(let index of notes){
            index.classList.toggle("checked");
        }
    })
});
    
