import Redis from 'ioredis'
const subscriber = new Redis();
import {Ride} from '../utils/interfaces/rideInterface'
 
 async function waitForUserResponse(body: Ride): Promise<string> {
    return new Promise((resolve, reject) => {
        subscriber.once('message', (channel, message) => {
            if (channel === 'users_channel') {
                const userData = JSON.parse(message);
                console.log(userData, 'Received user data');
                if (userData.id === body.driverId) {
                    console.log('User found');
                    resolve('yes');
                } else {
                    console.log('User not found');
                    resolve('no');
                }
            }
        });
    });
}
export default waitForUserResponse;