package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Client;

import java.util.Scanner;

public class MainClient {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);
        Client client = new Client();

        System.out.println("Enter your name:");
        String name = reading.nextLine();

        System.out.println("Enter your city");
        String city = reading.nextLine();

        System.out.println("Enter your rua");
        String rua = reading.nextLine();

        System.out.println("Enter your cep:");
        Integer cep = reading.nextInt();

        System.out.println("Enter your number house");
        Integer numberHouse = reading.nextInt();

        client.setFirstName(name);
        client.setCity(city);
        client.setCep(cep);
        client.setRua(rua);
        client.setNumberHouse(numberHouse);
        client.setTypePlan(true);

        boolean toCheck = true;
        boolean userExist;

        while (toCheck){
            System.out.println("Entrou");
            userExist = true;
            if (userExist){
                System.out.println(client.getFirstName());
                System.out.println(client.getRua());
                System.out.println(client.getCity());
            }
            break;
        }
        System.out.println("Saiu");
    }
}
