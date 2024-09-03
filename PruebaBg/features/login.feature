Feature: Inicio de sesión de usuario
Scenario: Iniciar sesión con credenciales válidas
Given que estoy en la página de inicio de sesión
When ingreso credenciales válidas
And hago clic en el botón de iniciar sesión
Then debería ver un mensaje de bienvenido "Welcome"

