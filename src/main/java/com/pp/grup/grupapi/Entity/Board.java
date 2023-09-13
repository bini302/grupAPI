package com.pp.grup.grupapi.Entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String content;
    private String filename;
    private String filepath;
    @Column(name = "writer")
    private String memberName;
    private LocalDateTime boardDate;

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }
}