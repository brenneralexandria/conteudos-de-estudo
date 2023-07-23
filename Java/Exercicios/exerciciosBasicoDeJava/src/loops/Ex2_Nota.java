package br.com.dio.exercicios.loops;

import java.util.Scanner;

/*
Faça um programa que peça uma nota, entre zero e dez.
Mostre uma mensagem caso o valor seja inválido
e continue pedindo
até que o usuário informe um valor válido.
*/
public class Ex2_Nota {
    public static void main(String[] args) {
       
    Scanner scanner = new Scanner(System.in);

        int NUMB;
        
        System.out.print("Digite uma nota de 0 até 10: ");
        NUMB = scanner.nextInt();

        while(NUMB < 0 || NUMB > 10) {
            System.out.println("Nota inválida, digite novamente ");
            NUMB = scanner.nextInt();
        }
            System.out.println("Nota dentro do desejado. encerrando o programa..."); 
    }

}