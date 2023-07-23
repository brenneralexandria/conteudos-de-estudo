package exerciciosbasicos;

import java.util.Scanner;

public class ex02 {

    public static void main(String[] args) {
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("digite um numero");
            int numb1 = scanner.nextInt();
            
            System.out.println("digite outro numero");
            int numb2 = scanner.nextInt();
            
            int soma = numb1 + numb2;
            
            System.out.println("A soma dos dois numeros e: " + soma);
        }
    }
    
}