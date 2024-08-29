package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Notice;

import java.time.LocalDate;
import java.util.Date;

public class MainNotice {
    public static void main(String[] args) {
        System.out.println("main notice");
        LocalDate myObj = LocalDate.now();
        Notice notice = new Notice();

        notice.setNoticeTitle("new notice");
        notice.setNoticeDescription("today's news");

        String title = notice.getNoticeTitle();
        String description  = notice.getNoticeDescription();

        System.out.println(title+ " or " +description);
        System.out.println(myObj);
        System.out.println(new Date());
    }
}
