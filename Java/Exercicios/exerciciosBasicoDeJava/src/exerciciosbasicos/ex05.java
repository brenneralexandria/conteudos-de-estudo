package exerciciosbasicos;

import java.util.Scanner;

public class ex05 {

    public static void main(String[] args) {
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite o primeiro numero");
            int num1 = scanner.nextInt();
            System.out.println("Digite o segundo numero");
            int num2 = scanner.nextInt();
            System.out.println("Digite o terceiro numero");
            int num3 = scanner.nextInt();
            
            if(num1 > num2 && num1 > num3) {
                System.out.println("O numero " + num1 + " e o maior");
            } else if (num2 > num1 && num2 > num3) {
                System.out.println("O numero " + num2 + " e o maior");
            } else {
                System.out.println("O numero " + num3 + " e o maior");
            }
        }
        
    }
}