Feature: Retiro de dinero
Scenario: Retirar dinero de una cuenta
Given he iniciado sesión en el sistema
When retiro "$100" de una cuenta
Then debería ver un mensaje de confirmación "Withdrawal successful"
And el saldo de la cuenta debería reducirse en "$100"
