package br.com.nightpatrol.main;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);
        System.out.println("Hello world!");
        System.out.println("Enter your user");
        String user = reading.nextLine();

        System.out.println(user);
    }
}