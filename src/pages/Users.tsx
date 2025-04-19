import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../store";
import { DataGrid } from "@mui/x-data-grid";
import AddUser from "../components/AddUser";
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
      const response = await axios.get<User[]>(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Box
        sx={{
          height: "70vh",
          width: "90vw",
          "& .super-app-theme--header": {
            backgroundColor: "#28282a",
          },
        }}
      >
        <Box>
          <AddUser onUserCreated={fetchUsers} />
        </Box>

        <DataGrid
          sx={{ color: "#c7c7c8" }}
          className="table-background"
          columns={[
            {
              field: "first_name",
              headerName: "First Name",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "last_name",
              headerName: "Last Name",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "email",
              headerName: "Email",
              minWidth: 200,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "organization",
              headerName: "Organization",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "roles_admin",
              headerName: "Admin Roles",
              minWidth: 300,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "roles_edit",
              headerName: "Edit Roles",
              minWidth: 300,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "roles_view",
              headerName: "View Roles",
              minWidth: 300,
              headerClassName: "super-app-theme--header",
            },
          ]}
          rows={users.map((user) => ({
            id: user.id,
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
    </Box>
  );
}
