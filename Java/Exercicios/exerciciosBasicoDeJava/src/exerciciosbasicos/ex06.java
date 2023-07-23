/* Escreva um programa que imprima na tela todos os números pares de 1 a 100. */

package exerciciosbasicos;

public class ex06 {

    public static void main(String[] args) {

        for(int i = 1; i <= 100; i++ ) {
            if(i % 2 == 0){
                System.out.println(i);
            }
        }
    }
}