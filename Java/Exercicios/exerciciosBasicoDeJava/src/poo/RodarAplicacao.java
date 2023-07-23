package poo;

import poo.Carro;

import java.util.Scanner;

public class RodarAplicacao {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Carro carro1 = new Carro();



        System.out.println("Digite a cor do seu carro: ");
        carro1.setCor(scanner.next());
        System.out.println("Digite o modelo do seu carro: ");
        carro1.setModelo(scanner.next());

        carro1.setCapacidadeTanque(83);

        System.out.println("a cor do seu carro é: " + carro1.getCor());
        System.out.println("O modelo do seu carro é: " + carro1.getModelo());
        System.out.printf("O valor para encher o tanque do seu carro é de: R$ %.2f", carro1.totalValorTanque(4.88));

    }
}
