const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    console.log("Creating customer with data:", req.body);
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    console.log("Customer saved successfully:", savedCustomer);
    res.json(savedCustomer);
  } catch (error) {
    console.error("Error saving customer:", error);
    res
      .status(500)
      .json({ message: "Failed to create customer", error: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch customers", error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(customer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update customer", error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "Customer deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete customer", error: error.message });
  }
};
