const { DataSource } = require('loopback-datasource-juggler');
const mongodbConnector = require('loopback-connector-mongodb');

const mongodbSource = new DataSource({
  connector: mongodbConnector,
  host: '127.0.0.1',
  port: 27017,
});

mongodbSource.on('connected', () => {
  console.log('connected');
});


var TestModel = mongodbSource.createModel('TestModel', {
  name: String
});
TestModel.find();

