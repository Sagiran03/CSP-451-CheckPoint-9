# CSP-451-CheckPoint-9

Smart Retail Inventory System

How It Works
The frontend app communicates with the backend API. Both frontend and backend run inside containers. The backend sends stock update data to an Azure Function. The Azure Function processes these updates, saves audit logs in Azure Storage, and sends alerts if stock is low.

Docker and Azure Function
We use Docker Compose to run the frontend, backend, and a MongoDB database on a virtual machine. The backend container listens on port 3000, mapped to port 5000 on the VM. The frontend listens on port 3000. The Azure Function receives stock updates securely using a function key and handles storage and alerts.
