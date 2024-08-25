package br.com.nightpatrol.main;

import br.com.nightpatrol.model.Notice;

public class MainNotice {
    public static void main(String[] args) {
        System.out.println("main notice");
        Notice notice = new Notice();

        notice.setNoticeTitle("");
        notice.setNoticeDescription("");
    }
}
