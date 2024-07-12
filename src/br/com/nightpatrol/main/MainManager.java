package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Manager;

import java.util.Scanner;

public class MainManager {
    public static void main(String[] args) {

        Scanner readind = new Scanner(System.in);
        System.out.println("Enter your name");
        String userManagerName = readind.nextLine();

        System.out.println("enter your city");
        String userManagerCity = readind.nextLine();

        System.out.println("enter your region");
        String userManagerRegion = readind.nextLine();

        Manager manager = new Manager();

        manager.setFirstName(userManagerName);
        manager.setNumberPhone(971266370);
        manager.setAge(27);
        manager.setCity(userManagerCity);
        manager.setRegion(userManagerRegion);

        System.out.println(manager.getFirstName());
        System.out.println("31"+ manager.getNumberPhone());
        System.out.println(manager.getAge());
        System.out.println(manager.getCity());
        System.out.println(manager.getRegion());
    }
}
