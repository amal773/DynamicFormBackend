const cds = require('@sap/cds');
const express = require('express');

cds.on('bootstrap', app => {
  app.get('/', (req, res) => {
    res.send('CAP Backend is running 🚀');
  });

  app.get('/catalog', (req, res) => {
    res.redirect('/odata/v4/CatalogService');
  });
});

module.exports = cds.server;
