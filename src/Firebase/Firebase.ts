import { ref, onValue } from 'firebase/database';
import { database } from './firebaseConfig';

export const fetchCustomer = (callback: (data: any[]) => void) => {
    const postsRef = ref(database, 'customer');

    onValue(postsRef, (snapshot) => {
        if (snapshot.exists()) {
            const dataCustomer = snapshot.val();
            const formattedData = Object.keys(dataCustomer).map(key => ({
                id: key,
                accountName: dataCustomer[key].accountName,
                avatar: dataCustomer[key].avatar,
                email: dataCustomer[key].email,
                name: dataCustomer[key].name,
                password: dataCustomer[key].password,
                phoneNumber: dataCustomer[key].phoneNumber,
                roleName: dataCustomer[key].roleName,
            }));
            console.log("Data fetched successfully:", formattedData); // Check fetched data
            callback(formattedData);
        } else {
            console.log("No data found."); // Log if no data is available
            callback([]);
        }
    });
};
