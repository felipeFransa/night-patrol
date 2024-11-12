package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Manager;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Scanner;

public class MainManager {
    public static void main(String[] args) {
        LocalDate nowDate = LocalDate.now();
        LocalTime nowTime = LocalTime.now();
        Scanner reading = new Scanner(System.in);
        System.out.println("Enter your name");
        String userManagerName = reading.nextLine();

        System.out.println("enter your city");
        String userManagerCity = reading.nextLine();

        System.out.println("enter your region");
        String userManagerRegion = reading.nextLine();

        Manager manager = new Manager();

        manager.setFirstName(userManagerName);
        manager.setNumberPhone(971266370);
        manager.setAge(27);
        manager.setCity(userManagerCity);
        manager.setRegion(userManagerRegion);
        manager.setState(true);

        var stateValid = manager.isState();

        if (stateValid){
            System.out.println(manager.getFirstName());
            System.out.println("31"+ manager.getNumberPhone());
            System.out.println(manager.getAge());
            System.out.println(manager.getCity());
            System.out.println(manager.getRegion());
            System.out.println(nowDate);
            System.out.println(nowTime);
        }else {
            System.out.println("no valid!");
        }
    }
}
