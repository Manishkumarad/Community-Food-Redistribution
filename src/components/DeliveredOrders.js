import React from 'react';

function DeliveredOrders() {
    const orders = [
        { id: 1, status: 'Delivered' },
        { id: 2, status: 'Delivered' },
    ];

    return (
        <div className="orders">
            <h2>Delivered Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <p>Order ID: {order.id}</p>
                        <p>Status: <span className="status">{order.status}</span></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DeliveredOrders;
