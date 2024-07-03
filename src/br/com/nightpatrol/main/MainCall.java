package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Call;

import java.util.Date;

public class MainCall {
    public static void main(String[] args) {
        System.out.println("olá seja bem vindo!");
        Call call = new Call();

        call.setDate(new Date());
        call.setHours(new Date());

        System.out.println("chamada realizadar");
        System.out.println(call.getDate());
    }
}
