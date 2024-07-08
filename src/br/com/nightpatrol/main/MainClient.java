package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Client;

import java.util.Scanner;

public class MainClient {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);
        System.out.println("Enter your name");
        String name = reading.nextLine();
        Client client = new Client();

        client.setFirstName(name);
        client.setAge(27);
        client.setCity("Belo horizonte");

        System.out.println(client.getFirstName());
        System.out.println(client.getAge());
        System.out.println(client.getCity());
    }
}
