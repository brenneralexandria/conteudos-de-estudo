package exerciciosbasicos;

import java.util.Scanner;

public class ex04 {

    public static void main(String[] args) {
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite o raio de um circulo");
            float raio = scanner.nextFloat();
            
            double pi = 3.14;
            
            double area = pi * raio * raio;
            
            System.out.println("A area do seu circulo e: " + area);
        }
    }
    
}
