'use strict';
const http = require('http');
// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');
// Your Google Cloud Platform project ID
const projectId = 'Qk8s_tester_441';
// Instantiates a client
const datastore = Datastore({
  projectId: projectId
});
// The kind for the new entity
const kind = 'ticket';

exports.dialogflowFirebaseFulfillment = (req, res) => {
  // Get the city and date from the request
  let ticketDescription = req.body.result['resolvedQuery']; // incidence is a required param
  //let name = req.body.result.contexts[0].parameters['given-name.original'];
  let name = req.body.result.contexts[0].parameters['given-name.original'];
  console.log('description is ' +ticketDescription);
  console.log('name is'+ name);
  function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }
  let ticketnum = randomIntInc(11111,99999);
  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key(kind);
  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      description: ticketDescription,
      name:name,
      ticketNumber: ticketnum
    }
  };
  console.log("incidence is  " + task);
  // Saves the entity
  datastore.save(task)
  .then(() => {
    console.log(`Saved ${task.key}: ${task.data.description}`);
    res.setHeader('Content-Type', 'application/json');
    //Response to send to Dialogflow
    res.send(JSON.stringify({ 'speech': "I have successfully logged your ticket, the ticket number is " + ticketnum + ". Someone from the helpdesk will reach out to you within 24 hours.", 'displayText': "I have successfully logged your ticket, the ticket number is " + ticketnum +  ". Someone from the helpdesk will reach out to you within 24 hours."}));
  })
  .catch((err) => {
    console.error('ERROR:', err);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': "Error occurred while saving, try again later", 'displayText': "Error occurred while saving, try again later" }));    
  });
}
