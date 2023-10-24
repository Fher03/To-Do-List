import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var notes = []
var note = ""
var notesWork = [];
var noteWork = "";

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/", (req, res)=>{
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const d = new Date()
    const day = d.getDay();
    const numMonth = d.getMonth();
    const year = d.getFullYear();
    res.render("index.ejs", {
        days: days[day],
        month: month[numMonth],
        year: year,
        notes: notes,
    });
})

app.get("/work", (req, res)=>{
    const d = new Date()
    const year = d.getFullYear();
    res.render("work.ejs", {
        notesWork: notesWork,
        year: year
    })
})

app.post('/', (req, res)=>{
    note = req.body["note"]
    notes.push(note)
    res.redirect('/');
})

app.post('/work', (req, res)=>{
    noteWork = req.body["noteWork"]
    notesWork.push(noteWork)
    res.redirect('/work');
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})


