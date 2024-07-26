package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Call;
import br.com.nightpatrol.model.Client;
import br.com.nightpatrol.model.Location;

import java.util.Date;

public class MainCall {
    public static void main(String[] args) {
        System.out.println("Hello welcome!");
        Call call = new Call();
        Location location = new Location();
        Client client = new Client();

        client.setFirstName("Rodrigo");
        client.setRua("F. Ovinio");
        client.setNumberHouse(100);
        client.setTypePlan(true);
        client.setCep(32113460);

        location.setLatitude("");
        location.setLongitude("");

        call.setDate(new Date());
        call.setHours(new Date());

        boolean toCheck = client.isTypePlan();

        while (toCheck == true ){
            System.out.println("Call success");
            System.out.println(call.getDate());
            System.out.println(client.getFirstName());
            System.out.println(client.getCity());
            System.out.println(client.getCep());
            System.out.println(client.getNumberHouse());
            break;
        }

        System.out.println("Chamada encerrada!");
    }
}
