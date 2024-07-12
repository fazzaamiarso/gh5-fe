interface Meta {
  success: boolean;
  message: string;
}

interface Role {
  id: string;
  created_at: string;
  created_by: string;
  modified_at: string | null;
  modified_by: string | null;
  name: string;
  role_code: string;
  is_active: boolean;
}

interface UserData {
  id: string;
  created_at: string;
  created_by: string;
  modified_at: string | null;
  modified_by: string | null;
  name: string;
  username: string;
  email: string;
  identity_card_number: string;
  address: string;
  password: string;
  is_active: boolean;
  role_id: string;
  role: Role;
}

interface User {
  Data: UserData;
}

interface ApiResponse {
  meta: Meta;
  data: User[];
}
