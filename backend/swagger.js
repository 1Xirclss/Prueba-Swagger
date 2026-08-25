import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'E-commerce API',
    description: 'Documentación de la API de e-commerce',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Servidor local'
    }
  ],
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'John Doe' },
          email: { type: 'string', example: 'john@example.com' },
          password: { type: 'string', example: '123456' },
          role: { type: 'string', example: 'user' }
        }
      },
      Product: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Camiseta' },
          description: { type: 'string', example: 'Camiseta de algodón' },
          price: { type: 'number', example: 19.99 },
          stock: { type: 'number', example: 100 },
          category: { type: 'string', example: '60d0fe4f5311236168a109ca' }
        }
      },
      Category: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Ropa' },
          description: { type: 'string', example: 'Categoría de ropa' }
        }
      }
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/app.js'];

// Generamos el archivo swagger.json
swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(() => {
  import('fs').then(fs => {
    let data = fs.readFileSync(outputFile, 'utf8');
    // Replace all type: "any" with type: "string" for better documentation
    data = data.replace(/"type":\s*"any"/g, '"type": "string"');
    // Also replace example "any" with example "string"
    data = data.replace(/"example":\s*"any"/g, '"example": "string"');
    fs.writeFileSync(outputFile, data);
    console.log('Archivo swagger.json generado y limpiado de "any" correctamente');
  });
});
