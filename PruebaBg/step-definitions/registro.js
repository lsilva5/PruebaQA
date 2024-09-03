const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estoy en la página de registro', async function () {
  await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
});

When('completo el formulario de registro con datos válidos', async function () {
  await this.page.fill('input[name="customer.firstName"]', 'Vallolet');
  await this.page.fill('input[name="customer.lastName"]', 'Silva');
  await this.page.fill('input[name="customer.address.street"]', 'Calle Falsa 123');
  await this.page.fill('input[name="customer.address.city"]', 'Guayaquil');
  await this.page.fill('input[name="customer.address.state"]', 'Estado');
  await this.page.fill('input[name="customer.address.zipCode"]', '12345');
  await this.page.fill('input[name="customer.phoneNumber"]', '555-5555');
  await this.page.fill('input[name="customer.ssn"]', '999-99-9999');
  await this.page.fill('input[name="customer.username"]', 'Vallolet1234');
  await this.page.fill('input[name="customer.password"]', 'pruebates*');
  await this.page.fill('input[name="repeatedPassword"]', 'pruebates*');
});

When('envío el formulario de registro', async function () {
  await this.page.click('input[value="Register"]');
});

Then('debería ver un mensaje de confirmación "Your account was created successfully."', async function (mensaje) {
  const textoConfirmacion = await this.page.textContent('.title');
  expect(textoConfirmacion).toContain(mensaje);
});
