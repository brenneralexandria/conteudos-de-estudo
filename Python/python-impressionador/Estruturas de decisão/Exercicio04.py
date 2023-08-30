"""
Comandos para saber a quantidade e a posição de palavras:

nome = 'brenner'

print(len(nome)
print(nome[2]) """

"""
Texto: lira@gmail.com

-14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
  l   i   r   a   @  g  m  a  i  l  .  c  o  m
  0   1   2   3   4  5  6  7  8  9 10 11 12 13
  
Para pegar um texto de trás para frente: texto[índice] -> onde índice é negativo
Para pegar o pedaço de um texto use : (dois pontos). texto[:indice] ou texto[indice:] ou ainda texto[indice:indice]
"""

# Exercicio para fixação

email = 'lira@gmail.com'
nome = 'João Paulo Lira'

print('Tamanho do e-mail ' + str(len(email)) + ' caracteres')
print('Primeiro Caractere ' + email[0])
print('Último Caractere ' + email[13])
print('Servidor do email ' + email[5:10])