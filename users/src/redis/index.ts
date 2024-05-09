import Redis from 'ioredis';
import userService from '../services/userService';
// const publisher = new Redis();
const subscriber = new Redis();

export function subscribeAll() {

  console.log('in_________________________');
  subscriber.subscribe('rides_channel');
  //subscriber.subscribe('users_channel');

  subscriber.on('message', async (channel, message) => {
    console.log(`Received ride-related data from ${channel}:`, JSON.parse(message));
    await userService.handleUserRelatedData(channel, message);
  
  
  });
}




//export default subscribeAll;