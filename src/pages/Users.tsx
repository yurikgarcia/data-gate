import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector } from '../store';
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";

// Define the User type
type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  roles_admin: string;
  roles_edit: string;
  roles_view: string;
};

export default function Users() {
  const apiUrl = useAppSelector((state) => state.api.apiUrl);
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(`${apiUrl}/users`)
      setUsers(response.data);
      console.log("users", response.data)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box style={{ height: 600, width: 1000 }}>
      <p>USERS Page</p>
      <DataGrid
        sx={{ whiteSpace: 'normal' }}
        columns={[
          { field: 'first_name', headerName: 'First Name', minWidth: 150 },
          { field: 'last_name', headerName: 'Last Name', minWidth: 150 },
          { field: 'email', headerName: 'Email', minWidth: 200 },
          { field: 'organization', headerName: 'Organization', minWidth: 100 },
          { field: 'roles_admin', headerName: 'Admin Roles', minWidth: 100 },
          { field: 'roles_edit', headerName: 'Edit Roles', minWidth: 100 },
          { field: 'roles_view', headerName: 'View Roles', minWidth: 100 },
        ]}
        rows={users.map((user) => ({
          id: user.id, // Ensure each row has a unique 'id'
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          organization: user.organization,
          roles_admin: user.roles_admin,
          roles_edit: user.roles_edit,
          roles_view: user.roles_view,
        }))}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}