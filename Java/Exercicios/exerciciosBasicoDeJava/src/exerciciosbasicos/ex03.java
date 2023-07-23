package exerciciosbasicos;

import java.util.Scanner;

public class ex03 {

    public static void main(String[] args) {
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite um numero");
            int numb = scanner.nextInt();
            
            if(numb % 2 == 0) {
                System.out.println("Par");
            } else {
                System.out.println("Impar");
            }
        }
    }
    
}
