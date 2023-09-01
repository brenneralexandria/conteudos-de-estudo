# Exercícios

## 1. Cadastro de CPF

"""Crie um programa para cadastro de CPF de clientes que recebe o CPF em um input box apenas com números.

Ex: 'Insira seu CPF (digite apenas números)'

Caso o usuário digite algo diferente de números ou digite menos de 11 caracteres (tamanho do CPF brasileiro), 
o programa deve exibir uma mensagem de "Digite seu CPF corretamente e digite apenas números"
"""

# cpf = input("Insira seu cpf(digite somente números): ")

# if len(cpf) == 11 and cpf.isnumeric():
#   print(cpf)
# else:
#  print("Digite seu CPF corretamente e digite apenas números")


"""## 2. Melhorando nosso Cadastro de CPF

Agora, além das validações anteriores, vamos criar um input que permita que o usuário insira pontos, traços e inclusive espaços vazios.

Nosso programa deve "tratar" o que o usuário inserir para padronizar o CPF dele em apenas números.

A verificação de tamanho do CPF com 11 caracteres continua válida, mas ela só deve ser feita depois de retirar todos os pontos, traços e espaços do CPF que o cliente inserir e, uma vez retirados pontos, traços e espaços, devem sobrar apenas números no CPF. Qualquer outro caractere deve ser considerado inválido.

No final, nosso programa deve exibir uma mensagem para o usuário, caso ele tenha inserido o CPF inválido ou então apenas deve printar o CPF correto já só com número.
"""

cpf = input("Insira seu cpf: ")

cpf = cpf.strip()
cpf = cpf.replace(".", "")
cpf = cpf.replace("-", "")

if len(cpf) == 11 and cpf.isnumeric():
    print(cpf)
else:
    print("Digite seu CPF corretamente e digite apenas números")
