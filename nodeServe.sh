
#!/bin/bash

# Clear the running ports 
echo "Clearing running ports..."
pm2 stop all
pm2 delete all
fuser -k 3000/tcp 
fuser -k 4000/tcp
fuser -k 8080/tcp

# Start User Module
echo "Starting the Users module..."
cd users
rm -r node_modules
rm -r package-lock.json
npm install
npm run start &
npm run serve &

# Start Ride Module
echo "Starting the Ride module..."
cd ../ride
rm -r node_modules
rm -r package-lock.json
npm install
npm run start &
npm run serve &

# Start My-Gateway
echo "Starting the Gateway module..."
cd ../expressGateway
rm -r node_modules
rm -r package-lock.json
npm install
npm run serve &
