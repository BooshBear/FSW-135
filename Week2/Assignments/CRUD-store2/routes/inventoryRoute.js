const express = require("express");
const invRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

let invItem = [
    {
        id: uuidv4(),
        item: "Wrench"
    },
    {
        id: uuidv4(),
        item: "Hat"
    },
    {
        id: uuidv4(),
        item: "Tools"
    }
];

invRouter
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        invItem.push(newItem);

        res.status(201).send(`Item sent: ${newItem.item}`);
    })
    .get('/', (req, res, next) => {
        res.status(200).send(invItem);
    })
    .get('/:itemID', (req, res) => {
        const itemID = req.params.itemID;
        const itemIndex = invItem.find(item => item.id === itemID);

        if (!invItem) {
            const error = new Error('Item not found');
            res.status(500)
            return next(error);
        }

        res.status(200).send(itemIndex);
    })
    .put('/:itemID', (req, res) => {
        const itemID = req.params.itemID;
        const itemIndex = invItem.findIndex(item => item.id === itemID);
        Object.assign(invItem[itemIndex], req.body);

        res.status(201).send("Item updated");
    })
    .delete('/:itemID', (req, res) => {
        const itemID = req.params.itemID;
        const itemIndex = invItem.findIndex(item => item.id === itemID);
        invItem.splice(itemIndex, 1);

        res.status(200).send("Item is deleted!");
    })

module.exports = invRouter;