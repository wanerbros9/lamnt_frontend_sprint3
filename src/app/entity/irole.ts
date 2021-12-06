import {IAccount} from "./iaccount";

export interface IRole {
  roleId: number;
  roleName: string;
  accounts: IAccount[];
}
