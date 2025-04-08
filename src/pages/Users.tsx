import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector } from "../store"



type User = {
  first_name: string;
  last_name: string;
  email: string;
};


export default function Users() {

const apiUrl = useAppSelector((state) => state.api.apiUrl);

const [users, setUsers] = useState<User[]>([]);

const fetchUsers = async () => {
  axios.get(`${apiUrl}/users`)
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
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
