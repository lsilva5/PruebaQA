const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  // Crear una instancia del navegador
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
});

After(async function () {
  // Cerrar el navegador después de cada prueba
  await this.browser.close();
});

// Definición del paso común
Given('que he iniciado sesión en el sistema', async function () {
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await this.page.fill('input[name="username"]', 'Vallolet1234');
  await this.page.fill('input[name="password"]', 'pruebates*');
  await this.page.click('input[value="Log In"]');

  
});
