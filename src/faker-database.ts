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

async function createFakeProducts() {
    config();
    const uriMongoDb = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
    
    const client = new MongoClient(uriMongoDb);

    try {
        await client.connect();
        const db = client.db('eCommerce');
        const productCollection = db.collection('products');
        const products = [];

        for (let index = 0; index < 30; index++) {
            const stock = faker.number.int({ min: 0, max: 100 });
            const status = stock > 0 ? 'Available' : 'Out of stock';
            const category = faker.helpers.arrayElement(['Electronics', 'Toys', 'Clothing', 'Baby', 'Pets', 'Games', 'Home']);

            const productName = faker.commerce.productName();
            const productDescription = faker.commerce.productDescription();

            const image = `https://picsum.photos/seed/${category}/640/480?grayscale&blur=2`


            products.push({
                name: productName,
                description: productDescription,
                category: category,
                price: faker.commerce.price({ symbol: '$' }),
                stock: stock,
                image: image,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                status: status,
                sku: faker.string.alphanumeric(10),
                discount: faker.number.int({ multipleOf: 10, min: 0, max: 50 }),
                supplir: faker.person.fullName(),
                stars: faker.number.float({ multipleOf: 0.5, min: 1, max: 5 })
            });
        }

        const result = await productCollection.insertMany(products);
        console.log(`${result.insertedCount} datos de prueba agregados exitosamente en la colección products`);
        await client.close();

    } catch (error) {
        console.error(`Error al almacenar los datos de prueba en la colección de products ${error}`);
    }
}

createFakeCustomers();
createFakeProducts();