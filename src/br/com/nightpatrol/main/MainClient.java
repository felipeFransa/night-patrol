package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Client;

public class MainClient {
    public static void main(String[] args) {
        Client client = new Client();

        client.setFirstName("felipe");
        client.setAge(27);
        client.setCity("Belo horizonte");

        System.out.println(client.getFirstName());
        System.out.println(client.getAge());
        System.out.println(client.getCity());
    }
}
