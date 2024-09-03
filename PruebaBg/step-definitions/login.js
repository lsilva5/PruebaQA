const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estoy en la página de inicio de sesión', async function () {
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

When('ingreso credenciales válidas', async function () {
  await this.page.fill('input[name="username"]', 'Vallolet1234');
  await this.page.fill('input[name="password"]', 'pruebates*');
});

When('hago clic en el botón de iniciar sesión', async function () {
  await this.page.click('input[value="Log In"]');
});

Then('debería ver un mensaje de bienvenida "Welcome"', async function (mensaje) {
  const textoBienvenida = await this.page.textContent('.smallText');
  expect(textoBienvenida).toContain(mensaje);
});
