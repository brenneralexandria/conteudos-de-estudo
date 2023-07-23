package exerciciosbasicos;

import java.util.Scanner;

public class ex08 {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite o primeiro número");
            int NUMB1 = scanner.nextInt();

            System.out.println("Digite o segundo número");
            int NUMB2 = scanner.nextInt();

            int SOMA = NUMB1 + NUMB2;
            int SUB = NUMB1 - NUMB2;
            int MULT = NUMB1 * NUMB2;
            float DIVISAO = NUMB1 / NUMB2;

            System.out.println("O resultando da soma é: " + SOMA);
            System.out.println("O resultando da subtrção é: " + SUB);
            System.out.println("O resultando da multiplicação é: " + MULT);
            System.out.println("O resultando da divisão é: " + DIVISAO);
        }
        
    }
}