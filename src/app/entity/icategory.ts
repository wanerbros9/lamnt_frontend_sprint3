import {IFood} from "./ifood";

export interface ICategory {
  categoryId: number;
  categoryName: string;
  food: IFood[];
}
