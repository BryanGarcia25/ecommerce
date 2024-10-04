import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerDto } from './DTO/customer.dto';

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [
        CustomersService,
        {
          provide: CustomersService,
          useValue: {
            findAllCustomers: jest.fn(),
            findCustomerById: jest.fn(),
            createCustomer: jest.fn().mockResolvedValue({
              id: 1, 
              name: 'Mary Gómez',
              email: 'mary@example.com',
              phone: '7381289384',
              address: 'Av. Springfield',
              age: 29,
              city: 'New York',
              gender: 'Fale'                 
            }),
            updateCustomer: jest.fn(),
            removeCustomer: jest.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Creando un nuevo cliente', async () => {
    const dto: CustomerDto = {
      name: 'Mary Gómez',
      email: 'mary@example.com',
      phone: '7381289384',
      address: 'Av. Springfield',
      age: 29,
      city: 'New York',
      gender: 'Fale'
    };

    const result = await controller.createCustomer(dto);
    expect(result).toEqual({
      id: 1, 
      name: 'Mary Gómez',
      email: 'mary@example.com',
      phone: '7381289384',
      address: 'Av. Springfield',
      age: 29,
      city: 'New York',
      gender: 'Fale'
    });

    expect(service.createCustomer).toHaveBeenCalledWith(dto);

  });
});
