package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Call;
import br.com.nightpatrol.model.Client;
import br.com.nightpatrol.model.Location;

import java.util.Date;
import java.util.Scanner;

public class MainCall {
    public static void main(String[] args) {
        System.out.println("Hello welcome!");
        Scanner reading = new Scanner(System.in);
        Call call = new Call();
        Location location = new Location();
        Client client = new Client();

        System.out.println("enter your name:");
        String firstName = reading.nextLine();

        System.out.println("enter your rua:");
        String rua = reading.nextLine();

        System.out.println("enter your number house:");
        Integer numberHouse  = reading.nextInt();

        System.out.println("enter your cep:");
        Integer cep = reading.nextInt();

        client.setFirstName(firstName);
        client.setRua(rua);
        client.setNumberHouse(numberHouse);
        client.setTypePlan(true);
        client.setCep(cep);

        location.setLatitude("-28.098883");
        location.setLongitude("-048.675000");

        call.setDate(new Date());
        call.setHours(new Date());

        boolean toCheck = client.isTypePlan();

        if (toCheck){
            System.out.println("Call success");
            System.out.println(call.getDate());
            System.out.println(client.getFirstName());
            System.out.println(client.getCity());
            System.out.println(client.getCep());
            System.out.println(client.getNumberHouse());
            System.out.println(location.getLatitude()+ " & " + location.getLongitude());
        }else {
            System.out.println("call failed!");
        }
    }
}
