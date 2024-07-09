package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Manager;

public class MainManager {
    public static void main(String[] args) {
        Manager manager = new Manager();

        manager.setFirstName("");
        manager.setAge(27);
        manager.setCity("");
        manager.setRegion("");

        System.out.println(manager);
    }
}
