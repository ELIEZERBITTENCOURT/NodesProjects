# VALIDADOR DE CODIGO DE BARRA

Existem vários formatos de código de barras, cada um com sua própria lógica de validação.
Neste exemplo, usaremos o código EAN-13, que é um dos formatos mais comuns e é usado em produtos
de varejo em todo o mundo.

Para validar um código de barras EAN-13, precisamos seguir os seguintes passos:

Verifique se o comprimento do código é 13 dígitos.

1. Some os dígitos nas posições ímpares (1ª, 3ª, 5ª, 7ª, 9ª e 11ª) e multiplique por 3.
2. Some os dígitos nas posições pares (2ª, 4ª, 6ª, 8ª, 10ª e 12ª).
3. Adicione o resultado dos passos 2 e 3.
4. Verifique o dígito de controle (último dígito do código de barras). Para isso, subtraia o resultado do passo 4 do próximo múltiplo de 10. Se o resultado for igual ao dígito de controle, o código de barras é válido.
