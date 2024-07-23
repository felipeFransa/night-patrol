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
        System.out.println("choose an option");
        Integer option = reading.nextInt();


        while (option != 0){
            if (option  == 1 ){
                System.out.println("Seja bem vindo!");
            } else if ( option == 2) {
                System.out.println("Seja bem vindo " +manager.getFirstName());
            } else {
                System.out.println("acesso negado");
            }
            break;
        }
    }
}