package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Client;

import java.util.Scanner;

public class MainClient {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = reading.nextLine();

        System.out.println("Enter your city");
        String city = reading.nextLine();

        System.out.println("Enter your age:");
        Integer age = reading.nextInt();

        Client client = new Client();

        client.setFirstName(name);
        client.setAge(age);
        client.setCity(city);
        client.setCep(32113460);
        client.setRua("Carlos Pinheiro Chagas");
        client.setNumberHouse(443);
        client.setTypePlan(true);

        boolean toCheck = true;
        boolean userExist;

        while (toCheck){
            System.out.println("Entrou");
            userExist = true;
            if (userExist){
                System.out.println(client.getFirstName());
                System.out.println(client.getAge());
                System.out.println(client.getCity());
            }
            break;
        }
        System.out.println("Saiu");
    }
}
