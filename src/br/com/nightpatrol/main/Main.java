package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Manager;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner reading = new Scanner(System.in);
        Scanner readingNumber = new Scanner(System.in);
        Manager manager = new Manager();
        LocalTime myTime = LocalTime.now();
        LocalDate myObj = LocalDate.now();

        System.out.println("enter user type client:");
        String name = reading.nextLine();

        if (name.equals("manager")){

            manager.setFirstName("Felipe");
            manager.setAge(27);

            System.out.println("Hello welcome your bank");
            System.out.println("enter your account");
            String yourPassword = reading.nextLine();

            String password = "a8f3s3f3";

            while (yourPassword.equals(password)){

                System.out.println("enter your option");
                Integer option = readingNumber.nextInt();

                if (option  == 1 ){
                    System.out.println("welcome " +manager.getFirstName());
                    System.out.println(myTime);
                    System.out.println(myObj);
                } else {
                    System.out.println("Access denied");
                }
                break;
            }
        }
    }
}