package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Manager;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner reading = new Scanner(System.in);
        Manager manager = new Manager();

        manager.setFirstName("Felipe");
        manager.setAge(27);

        System.out.println("Hello welcome your bank");
        System.out.println("enter your account");
        String yourPassword = reading.nextLine();

        String password = "a8f3s3f3";

        while (yourPassword.equals(password)){

            System.out.println("enter your option");
            Integer option = reading.nextInt();

            if (option  == 1 ){
                System.out.println("Seja bem vindo " +manager.getFirstName());
            } else {
                System.out.println("acesso negado");
            }
            break;
        }
    }
}