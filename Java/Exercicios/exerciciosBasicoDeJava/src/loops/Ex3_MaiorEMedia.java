package br.com.dio.exercicios.loops;

import java.util.Scanner;

/*
Faça um programa que leia 5 números
e informe o maior número
e a média desses números.
*/
public class Ex3_MaiorEMedia {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int NUMB;
        int MAIOR = 0;
        int SOMA = 0;
        int COUNT = 0;
        
        do {
            System.out.println("Número: ");
            NUMB = scanner.nextInt();

            SOMA = SOMA + NUMB;

            if(NUMB > MAIOR) MAIOR = NUMB;

            COUNT++;
        } while(COUNT < 5);

            System.out.println("Maior: " + MAIOR);
            System.out.println("Média: " + (SOMA/5));
    }
}
