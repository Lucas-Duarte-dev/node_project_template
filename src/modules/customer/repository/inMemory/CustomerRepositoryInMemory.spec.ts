import {CustomerRepositoryInterface} from "../CustomerRepositoryInterface";
import {CustomerRepositoryInMemory} from "./CustomerRepositoryInMemory";
import {CustomerInterface} from "@domain/CustomerInterface";

let customerRepository: CustomerRepositoryInterface;
let customerMock: CustomerInterface;

beforeEach(() => {
  customerRepository = CustomerRepositoryInMemory.getInstance();
  customerMock = {
    name: "test_customer",
    email: "test@mail.com",
    password: "123test"
  }
})

describe("Customer Repository", () => {
  it("Should be possible create a customer", async () => {
    const expected = Object.assign(customerMock, {id: "1234"});

    const customer = await customerRepository.create(expected);

    expect(expected).toEqual(customer);
  })

  it("Should be possible get all customers", async () => {
    await customerRepository.create(
        Object.assign(customerMock, {id: "12345"})
    );

    const customers = await customerRepository.get();

    expect(customers.length).toEqual(2);
  })

  it("Should be possible get customer by ID", async () => {
    const expected = Object.assign(customerMock, {id: "12345"});

    const customer = await customerRepository.getById('12345');

    expect(expected).toEqual(customer);
  })
})
