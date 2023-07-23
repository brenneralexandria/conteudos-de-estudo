package br.com.estudy.exercicios.exerciciosList;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Exercicio5 {
    public static void main(String[] args) {

        List<Object> numb = new ArrayList<>();

        numb.add(1);
        numb.add(2);
        numb.add(3);
        numb.add(4);
        numb.add(5);
        numb.add(6);
        numb.add(7);
        numb.add(8);
        numb.add(9);
        numb.add(10);

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o número que deseja excluir: \n");
        int valor = scan.nextInt();

        if (numb.contains(valor)) {
            numb.remove(Integer.valueOf(valor));

        } else {
            System.out.println("Número não encontrado");
        }
        System.out.println(numb);
    }
}
