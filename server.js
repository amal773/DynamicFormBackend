const cds = require('@sap/cds');
const express = require('express');

cds.on('bootstrap', app => {
  app.get('/', (req, res) => {
    res.send('CAP Backend is running 🚀');
  });
});

module.exports = cds.server;
