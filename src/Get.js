import genresData from '../data/movie_genres.json' with { type: 'json' };

export  function mainpage(app) {
    app.get('/', (req, res) => {
        res.send('Api Main Page');
    });
     };


export  function genres(app) {
    // returns the json file with all the movie genres
    app.get('/api/genres', (req, res) => {
        res.json(genresData);
    });

    // returns the json file with the specific movie genre
    app.get('/api/genres/:id', (req, res) => {
        let id = req.params.id;
        // if the item in the json does not exist, return a 404 error
        if (genresData[id] === undefined) {
            res.status(404).send('Genre not found');
            return;
        }
        res.json(genresData[id]);   
     });
     };
