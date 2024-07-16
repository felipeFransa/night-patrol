package br.com.nightpatrol.main;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);
        System.out.println("Hello welcome!");
        System.out.println("choose an option");
        String option = reading.nextLine();
        System.out.println(option.getClass());
    }
}