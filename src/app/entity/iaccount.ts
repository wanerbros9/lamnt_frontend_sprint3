import {IRole} from "./irole";
import {ICustomer} from "./icustomer";

export interface IAccount {
  accountId: number;
  accountUsername: string;
  accountPassword: string;
  email: string;
  isActive: boolean;
  isDelete: boolean;
  role: IRole[];
  customer: ICustomer;
}
