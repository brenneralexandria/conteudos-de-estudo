package collections.list;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class ExemploList {
    public static void main(String[] args) {

        System.out.println("Crie uma lista e adicione as sete notas: ");

        List<Double> notas = new ArrayList<>();
        notas.add(7d);
        notas.add(8.5d);
        notas.add(9.3d);
        notas.add(5d);
        notas.add(7d);
        notas.add(0d);
        notas.add(3.6d);

        System.out.println(notas);

        System.out.println("Exiba a posição da nota 5: " + notas.indexOf(5d));

        System.out.println("Adicione na lista a nota 8 na posição 4: ");
        notas.add(4, 8d);
        System.out.println(notas);

        System.out.println("Substitua a nota 5 pela nota 6: ");
        notas.set(3, 6d);
        System.out.println(notas);

        System.out.println("confira se a nota 5 está na lista: " + notas.contains(5d));

        System.out.println("Exiba a terceira nota adicionada: " + notas.get(2));
        System.out.println(notas);

        System.out.println("Exiba a menor nota: " + Collections.min(notas));

        System.out.println("Exiba a maior nota: " + Collections.max(notas));

        Iterator<Double> iterator = notas.iterator();
        Double soma = 0d;
        while(iterator.hasNext()){
            Double next = iterator.next();
            soma += next;
        }
        System.out.println("Exiba a soma dos valores: " + soma);

        System.out.println("Exiba a média das notas: " + (soma/notas.size()));

        System.out.println("Remova a nota 0: ");
        notas.remove(0d);
        System.out.println(notas);

        System.out.println("Remova a nota da posição 0");
        notas.remove(0);
        System.out.println(notas);

        System.out.println("Remova as notas menores que 7 e exiba a lista: ");
        notas.removeIf(next -> next < 7);
        System.out.println(notas);

        /*System.out.println("Apague toda a lista");
        notas.clear();
        System.out.println(notas);
        */
        System.out.println("Confira se a lista está vazia: " + notas.isEmpty());
/*
Para você: Resolva esses exercícios utilizando os métodos da implementação LinkedList:
        System.out.println("Crie uma lista chamada notas2 " +
                "e coloque todos os elementos da list Arraylist nessa nova lista: ");
        System.out.println("Mostre a primeira nota da nova lista sem removê-lo: ");
        System.out.println("Mostre a primeira nota da nova lista removendo-o: ");
*/
    }
}