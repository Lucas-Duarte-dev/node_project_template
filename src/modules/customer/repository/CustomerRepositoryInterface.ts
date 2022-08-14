import {CustomerInterface} from "@domain/CustomerInterface";

export interface CustomerRepositoryInterface {
  create: (customer: CustomerInterface) => Promise<CustomerInterface>;
  get: () => Promise<CustomerInterface[]>;
  getById: (id: string) => Promise<CustomerInterface>;
}
