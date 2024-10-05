import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { getModelToken } from '@nestjs/mongoose';
import { CustomerDocument } from './customer.schema';
import { Model } from 'mongoose';

describe('CustomersService', () => {
  let service: CustomersService;
  let model: Model<CustomerDocument>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: getModelToken('Customer'),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn()
          }
        }
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    model = module.get<Model<CustomerDocument>>(getModelToken('Customer'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Test para crear un cliente', async () => {
    const customerDto = { name: 'Mary Gómez', email: 'mary@example.com', phone: '7381289384', address: 'Av. Springfield', age: 29, city: 'New York', gender: 'Fale' };

    const mockCustomer = { id: '1', ...customerDto };

    jest.spyOn(model, 'create').mockImplementation(() => mockCustomer as any);

    const result = await service.createCustomer(customerDto);
    expect(result).toEqual(mockCustomer)
  });

  it('Test para obtener todos los clientes', async () => {
    const mockCustomer = [
      {
        id: '1',
        name: 'Mary Gómez',
        email: 'mary@example.com',
        phone: '7381289384',
        address: 'Av. Springfield',
        age: 29,
        city: 'New York',
        gender: 'Female' 
      },
      {
        id: '2',
        name: 'Joe Smith',
        email: 'jsmith@example.com',
        phone: '7895621423',
        address: 'Av. Abraham Lincon',
        age: 43,
        city: 'Paris',
        gender: 'Male' 
      },
      {
        id: '3',
        name: 'Andres Martinez',
        email: 'martinez21@example.com',
        phone: '5598523694',
        address: 'Av. Independencia',
        age: 21,
        city: 'México',
        gender: 'Male' 
      },
    ];

    jest.spyOn(model, 'find').mockImplementation(() => mockCustomer as any);

    const result = await service.findAllCustomers();
    expect(result).toEqual(mockCustomer)
  })
});
