Feature: Transferencia de dinero
Scenario: Transferir dinero entre dos cuentas
Given que he iniciado sesión en el sistema
When transfiero "$200" de una cuenta a otra
Then debería ver un mensaje de confirmación "Transfer completed successfully"
And los saldos de las cuentas deberían actualizarse correctamente
