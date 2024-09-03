Feature: Registro de usuario
Scenario: Registrarse en el sistema con datos válidos
Given que estoy en la página de registro
When completo el formulario de registro con datos válidos
And envío el formulario de registro
Then debería ver un mensaje de confirmación "Your account was created successfully."
