package br.com.estudy.exercicios.exerciciosList;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args) {

    List<Object> numb = new ArrayList<>();

    numb.add(1);
    numb.add(2);
    numb.add(3);
    numb.add(4);
    numb.add(5);

        Scanner scan = new Scanner(System.in);

        System.out.println("Acrescente um valor a lista");
        int valor = scan.nextInt();

        numb.add(valor);

        System.out.println(numb);

    }
}
