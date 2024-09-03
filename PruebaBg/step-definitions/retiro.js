const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('he iniciado sesión en el sistema', async function () {
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await this.page.fill('input[name="username"]', 'Vallolet1234');
  await this.page.fill('input[name="password"]', 'pruebates*');
  await this.page.click('input[value="Log In"]');
});

When('retiro {string} de una cuenta', async function (cantidad) {
  
  this.saldoAntes = await this.page.textContent('.account-balance'); // 

  await this.page.click('text=Accounts Overview'); 
  await this.page.click('text=Account Services'); 
  await this.page.click('text=Withdraw Funds'); 
  
  await this.page.fill('input[name="amount"]', cantidad);
  await this.page.selectOption('select[name="accountId"]', '12345'); // 
  

  await this.page.click('input[value="Withdraw"]');
  
  
  this.saldoDespués = await this.page.textContent('.account-balance'); // 
});

Then('debería ver un mensaje de confirmación {string}', async function (mensaje) {
  const textoConfirmacion = await this.page.textContent('.title');
  expect(textoConfirmacion).toContain(mensaje);
});

Then('el saldo de la cuenta debería reducirse en {string}', async function (cantidad) {
  const cantidadRetirada = parseFloat(cantidad);
  
  // Convertir saldos de texto a números
  const saldoAntes = parseFloat(this.saldoAntes.replace(/[^\d.-]/g, ''));
  const saldoDespués = parseFloat(this.saldoDespués.replace(/[^\d.-]/g, ''));
  
  // Verificar que el saldo ha disminuido en la cantidad retirada
  expect(saldoDespués).toBeCloseTo(saldoAntes - cantidadRetirada, 2);
});
