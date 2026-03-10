const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

exports.updateCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(customer);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
};