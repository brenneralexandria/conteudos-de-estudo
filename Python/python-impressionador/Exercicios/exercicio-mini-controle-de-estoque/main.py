produto = input("Qual o produto? ")
categoria = input("Qual a categoria do produto? ")
qtde = int(input("Qual a quantidade atual do produto? "))

if produto and categoria and qtde:
    if categoria == "bebidas":
        if qtde < 75:
            print(f"Solicitar {produto} à equipe de compras, temos apenas {qtde} unidades em estoque")
    elif categoria == "limpeza":
        if qtde < 30:
            print(f"Solicitar {produto} à equipe de compras, temos apenas {qtde} unidades em estoque")
    else:
        if qtde < 50:
            print(f"Solicitar {produto} à equipe de compras, temos apenas {qtde} unidades em estoque")
else:
    print("Preencha todas as informações")