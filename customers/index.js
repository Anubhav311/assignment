const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/route.js');

const app = express();

const PORT = 3002;

app.use(bodyParser.json());
app.use('/', routes);

let customers = [
  { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
  { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
];

// Get all customers
app.get('/customers', (req, res) => {
  res.json(customers);
});

// Add a new customer
app.post('/customers', (req, res) => {
  const { id, name, email } = req.body;
  customers.push({ id, name, email });
  res.status(201).send('Customer added successfully');
});

// Update a customer
app.put('/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  const { name, email } = req.body;
  const customerIndex = customers.findIndex(customer => customer.id === customerId);
  if (customerIndex !== -1) {
    customers[customerIndex] = { id: customerId, name, email };
    res.send('Customer updated successfully');
  } else {
    res.status(404).send('Customer not found');
  }
});

// Delete a customer
app.delete('/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  customers = customers.filter(customer => customer.id !== customerId);
  res.send('Customer deleted successfully');
});

// Check health
// app.get('/', (req, res) => {
//   res.send('Customer Service is live')
// })

app.listen(PORT, () => {
  console.log(`Customer service is running on port ${PORT}`);
});
