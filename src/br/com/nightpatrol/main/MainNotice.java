package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Notice;

import java.time.LocalDate;
import java.util.Date;
import java.util.Scanner;

public class MainNotice {
    public static void main(String[] args) {
        System.out.println("main notice");
        Scanner reading = new Scanner(System.in);
        System.out.println("enter new notice");
        String titleNotice = reading.nextLine();

        System.out.println("enter new description notice");
        String descriptionNotice = reading.nextLine();

        Notice notice = new Notice();

        notice.setNoticeTitle(titleNotice);
        notice.setNoticeDescription(descriptionNotice);

        String title = notice.getNoticeTitle();
        String description  = notice.getNoticeDescription();

        System.out.println(title+ " or " +description);
        System.out.println(new Date());
    }
}
