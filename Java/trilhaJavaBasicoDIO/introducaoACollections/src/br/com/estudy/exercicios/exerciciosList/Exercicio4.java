package br.com.estudy.exercicios.exerciciosList;

import java.util.ArrayList;
import java.util.List;

public class Exercicio4 {
    public static void main(String[] args) {

        List<Integer> numb = new ArrayList<>();

        numb.add(1);
        numb.add(2);
        numb.add(3);
        numb.add(4);
        numb.add(5);

        numb.remove(3);

        System.out.println(numb);

    }
}
