faturamento = 1000
custo = 500
lucro = faturamento - custo

# uso do str() e do concatenar com +

print("O faturamento da loja foi de: " + str(faturamento))


# Uso do format

print("O faturamento da loja foi de: {}".format(faturamento))


# Uso do %s(String) e %d(Número)

print(
    "O faturamento foi de: %d. O custo foi de %d e o Lucro foi de: %d"
    % (faturamento, custo, lucro)
)


# Uso do in

print("@" in "brenner@gmail.com")
