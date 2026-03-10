import { useEffect, useState } from "react";
import API from "../services/api";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const res = await API.get("/customers");

    setCustomers(res.data);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    await API.delete(`/customers/${id}`);

    getCustomers();
  };

  return (
    <div>
      <h3>Customer List</h3>

      {customers.map((c) => (
        <div key={c._id}>
          {c.name} - {c.email}
          <button onClick={() => deleteCustomer(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;
