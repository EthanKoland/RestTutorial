const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        //500 is a server error, db has an error nothing to do will user or client
        res.status(500).json({ message: err.message });
    }

});

router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber)
});

//Update all of the fields
router.post('/', async (req, res) => {
    try {
        const subscriber = new Subscriber({
            name: req.body.name,
            subscriberToChannel: req.body.subscriberToChannel
        });

        const newSubscriber = await subscriber.save();
        //201 is a success, something was created
        res.status(201).json(newSubscriber);
    } catch (err) {
        //400 is a user error, they sent in bad data
        res.status(400).json({ message: err.message });
    }

});

//Only update the fields that were passed in
router.patch('/:id', (req, res) => {

});

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne();
        res.json({ message: 'Deleted Subscriber' });
    } catch (err) {
        //500 is a server error, db has an error nothing to do will user or client
        res.status(500).json({ message: err.message });
    }

});

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            //404 is a user error, they asked for something that doesn't exist
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (err) {
        //500 is a server error, db has an error nothing to do will user or client
        return res.status(500).json({ message: err.message });
    }

    //can call res.subscriber in other functions
    res.subscriber = subscriber;
    next();
}


module.exports = router;