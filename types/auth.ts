import { Meta } from "./meta";

type Nullable<T> = T | null;

interface RegisterData {
  id: string;
  created_at: string;
  created_by: string;
  modified_at: Nullable<string>;
  modified_by: Nullable<string>;
  name: string;
  username: string;
  email: string;
  identity_card_number: string;
  address: string;
  password: string;
  is_active: boolean;
  role_id: string;
  role: string;
}

export interface IRegister {
  meta: Meta;
  data: RegisterData[];
}
