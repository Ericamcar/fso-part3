const express = require('express');
const morgan = require('morgan');

const app = express();

morgan.token('data', (req, res) => {
    return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'));

app.use(express.json());

persons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people<p><p>${new Date().toString()}</p>`);
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.post('/api/persons', (req, res) => {
    const body = req.body;
    if (!body.name) {
        return res.status(400).json({
            error: "name missing"
        });
    } else if (!body.number) {
        return res.status(400).json({
            error: "number missing"
        })
    } else if (persons.some(p => p.name === body.name)) {
        return res.status(400).json({
            error: "name must be unique"
        })
    } else {
        const person = {
            id: Math.ceil(Math.random() * 1000),
            name: body.name,
            number: body.number
        }
        persons = persons.concat(person);
        console.log(persons);
        res.json(person);
    }
});

app.get('/api/persons/:id', (req, res) => {
    const note = persons.find(p => Number(req.params.id) ===  p.id);
    if (note) return res.json(note);
    res.status(404).end();
});

app.delete('/api/persons/:id', (req, res) => {
    persons = persons.filter(p => p.id !== Number(req.params.id));
    console.log(persons);
    res.status(204).end();
})

app.listen(3000, () => console.log('SERVER IS LISTENING'));