package exerciciosbasicos;

import java.util.Scanner;

public class ex07 {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Escreva o primeiro número");
            int numb1 = scanner.nextInt();

            System.out.println("Digite o segundo número");
            int numb2 = scanner.nextInt();

            System.out.println("Digite o terceiro número");
            int numb3 = scanner.nextInt();

            float mediaArtimetica = (numb1+numb2+numb3)/3;

            System.out.println("A média dos números que você passou é: " + mediaArtimetica);
        }
    }
}