const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('he iniciado sesión en el sistema', async function () {
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await this.page.fill('input[name="username"]', 'juanperez');
  await this.page.fill('input[name="password"]', 'secreto123');
  await this.page.click('input[value="Log In"]');
});

When('transfiero {string} de una cuenta a otra', async function (cantidad) {
  // Capturar el saldo antes de la transferencia
  this.saldoAntes = await this.page.textContent('.account-balance'); // Asegúrate de ajustar el selector al correcto
  
  await this.page.click('text=Transfer Funds');
  
  // Rellenar el formulario de transferencia
  await this.page.fill('input[name="amount"]', cantidad);
  await this.page.selectOption('select[name="fromAccountId"]', '12345'); // Ajustar al ID de cuenta correcto
  await this.page.selectOption('select[name="toAccountId"]', '67890'); // Ajustar al ID de cuenta correcto
  
  // Enviar la transferencia
  await this.page.click('input[value="Transfer"]');
  
  // Capturar el saldo después de la transferencia
  this.saldoDespués = await this.page.textContent('.account-balance'); // Asegúrate de ajustar el selector al correcto
});

Then('debería ver un mensaje de confirmación {string}', async function (mensaje) {
  const textoConfirmacion = await this.page.textContent('.title');
  expect(textoConfirmacion).toContain(mensaje);
});

Then('los saldos de las cuentas deberían actualizarse correctamente', async function () {
  // Aquí puedes añadir lógica para verificar que los saldos se han actualizado correctamente.
  // Ejemplo simple de verificación:
  
  // Si tienes los saldos antes y después, puedes hacer una verificación simple:
  const cantidadTransferida = 200; // Asegúrate de que coincida con la cantidad transferida
  const saldoAntes = parseFloat(this.saldoAntes.replace(/[^\d.-]/g, ''));
  const saldoDespués = parseFloat(this.saldoDespués.replace(/[^\d.-]/g, ''));
  
  // Verificar que el saldo ha disminuido en la cantidad transferida
  expect(saldoDespués).toBeCloseTo(saldoAntes - cantidadTransferida, 2); // 2 es el número de decimales permitidos
});
