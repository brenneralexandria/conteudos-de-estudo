nome = input('Digite seu nome: ')
email = input('Digite seu e-mail: ')

pos_a = email.find('@')
servidor = email[pos_a:]

if pos_a != -1 and '.' in servidor:
    print('Cadastro concluído com sucesso')
else:
    print('Email inválido')