import { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  first_name: string;
  last_name: string;
  email: string;
};

export default function Users() {

const [users, setUsers] = useState<User[]>([]);

const fetchUsers = async () => {
  console.log('Fetching users in frontend..!.');
  axios.get('http://localhost:8080/users')
    .then((response) => {
      console.log ('RESPONSE:', response);
      setUsers(response.data);
    })
    .catch((error) => {
      console.log("ERROR")
      console.error('Error fetching users:', error);
    });
};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <p>USERS Page</p>
      {users.map((user, i) => (
        <div key={i}>
          <p>{user.first_name} {user.last_name}</p>
        </div>
      ))
      }
    </div>
  )
}
