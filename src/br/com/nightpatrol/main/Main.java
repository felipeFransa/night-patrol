package br.com.nightpatrol.main;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner reading = new Scanner(System.in);
        System.out.println("Hello welcome!");
        System.out.println("choose an option");
        Integer option = reading.nextInt();


        while (option != 0){
            System.out.println("Access negado!");
            break;
        }
    }
}