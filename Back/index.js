const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/', async (req, res) => {

    try {

        let urlToFetch = 'https://swapi.dev/api/people'

        let parseData = [];


        for (let i = 0; urlToFetch; i++) {
            const response = await fetch(urlToFetch)

            if (!response) {
                throw new Error('Invalid request')
            }

            const responseToJson = await response.json()


            for (let j = 0; j < responseToJson.results.length; j++) {
                parseData.push({ name: responseToJson.results[j].name, height: responseToJson.results[j].height, mass: responseToJson.results[j].mass, gender: responseToJson.results[j].gender, films: responseToJson.results[j].films, url: responseToJson.results[j].url })
            }

            urlToFetch = responseToJson.next

        }

        res.send(parseData).status(200)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }

})

app.get('/:id', async (req, res) => {
    try {

        let urlToFetch = `https://swapi.dev/api/people/${req.params.id}`

        let parseData = [];

        const response = await fetch(urlToFetch)

        if (!response) {
            throw new Error('Invalid request')
        }

        const responseToJson = await response.json()
        parseData.push({ name: responseToJson.name, height: responseToJson.height, mass: responseToJson.mass, gender: responseToJson.gender, films: responseToJson.films, url: responseToJson.url })

        let films = []

        for (let i = 0; i < parseData[0].films.length; i++) {

            let film = parseData[0].films[i];
            try {
                const response = await fetch(film)


                if (!response) {
                    throw new Error('Invalid request')
                }

                const responseToJson = await response.json()

                films.push({ title: responseToJson.title })

            } catch (error) {
                console.error(error)
            }
        }

        parseData[0].films = films

        res.send(parseData).status(200)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
})

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})