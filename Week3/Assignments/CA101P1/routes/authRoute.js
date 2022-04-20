const express = require("express");
const authRouter = express.Router();

authRouter
    .post('/', (req, res) => {
        const newItem = req.body;
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

module.exports = authRouter;