import { faker } from '@faker-js/faker';
import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

async function createFakeCustomers() {
    config();
    const uriMongoDb = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
    
    const client = new MongoClient(uriMongoDb);

    try {
        await client.connect();
        const db = client.db('eCommerce');
        const customerCollection = db.collection('customers');
        const customers = [];

        for (let index = 0; index < 30; index++) {
            customers.push({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number({ style: 'international' }),
                address: faker.location.streetAddress(),
                age: faker.number.int({ min: 18, max: 90 }),
                city: faker.location.city(),
                gender: faker.person.sex()
            });
        }

        const result = await customerCollection.insertMany(customers);
        console.log(`${result.insertedCount} datos de prueba agregados exitosamente en la colección customers`);
        await client.close();

    } catch (error) {
        console.error(`Error al almacenar los datos de prueba en la colección de customers ${error}`);
    }
}

createFakeCustomers();