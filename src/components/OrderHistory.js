import React from 'react';
import '../Orderhistory.css';

function OrderHistory() {
  const orders = [
    { id: 1, date: '2024-10-25', status: 'Delivered' },
    { id: 2, date: '2024-10-20', status: 'In Progress' },
    { id: 3, date: '2024-10-15', status: 'Delivered' },
  ];

  return (
    <div className="order-history-container">
      <h2>Your Order History</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td className={order.status === 'Delivered' ? 'delivered' : 'in-progress'}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
