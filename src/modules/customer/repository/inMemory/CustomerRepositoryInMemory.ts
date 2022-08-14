import {CustomerRepositoryInterface} from "../CustomerRepositoryInterface";
import {CustomerInterface} from "@domain/CustomerInterface";

class CustomerRepositoryInMemory implements CustomerRepositoryInterface {
  private readonly customers: CustomerInterface[] = [];
  private static instance: CustomerRepositoryInMemory;

  constructor() {
    this.customers = [];
  }

  static getInstance(): CustomerRepositoryInterface {
    if (!CustomerRepositoryInMemory.instance) {
      CustomerRepositoryInMemory.instance = new CustomerRepositoryInMemory();
    }

    return CustomerRepositoryInMemory.instance;
  }

  async create(customer: CustomerInterface): Promise<CustomerInterface> {
    this.customers.push(customer);

    return customer;
  }

  async get(): Promise<CustomerInterface[]> {
    return this.customers;
  }

  async getById(id: string): Promise<CustomerInterface> {
    return this.customers.find(customer => customer.id === id);
  }
}

export {CustomerRepositoryInMemory};
