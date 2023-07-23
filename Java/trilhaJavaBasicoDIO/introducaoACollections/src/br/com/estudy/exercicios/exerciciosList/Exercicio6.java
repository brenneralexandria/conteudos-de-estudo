package br.com.estudy.exercicios.exerciciosList;

import java.util.ArrayList;
import java.util.List;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();

        // Adicionando objetos à lista
        people.add(new Person("João", 25));
        people.add(new Person("Maria", 30));
        people.add(new Person("Pedro", 40));
        people.add(new Person("Ana", 35));
        people.add(new Person("Carlos", 28));

        // Imprimindo os atributos dos objetos
        for (Person person : people) {
            System.out.println("Nome: " + person.getName() + ", Idade: " + person.getAge());
        }
    }
}