var CityEvent = require('./models/cityEvent');

function getCityEvent(res) {
    CityEvent.find(function (err, cityEvents) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(cityEvents); // return all in JSON format
    });
};


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all cityEvents
    app.get('/api/cityEvent', function (req, res) {
        // use mongoose to get all events in the database
        getCityEvent(res);
    });


    // create event and send back all  after creation
    app.post('/api/cityEvent', function (req, res) {

        // create information comes from AJAX request from Angular
        CityEvent.create({
            text: req.body.text,
            done: false
        }, function (err, cityEvent) {
            if (err)
                res.send(err);

            // get and return all  after you create another
            getCityEvent(res);
        });

    });

    // delete a todo
    app.delete('/api/cityEvent/:event_id', function (req, res) {
        Todo.remove({
            _id: req.params.event_id
        }, function (err, cityEvent) {
            if (err)
                res.send(err);

            getCityEvent(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + './public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};