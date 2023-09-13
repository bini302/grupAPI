package com.pp.grup.grupapi.Entity;

import com.pp.grup.grupapi.Dto.RecommandDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Setter
@Getter
@Table(name = "answerPlants")
public class RecommandEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //auto_increment
    private Long answerId;
//    @Column(name = "userEmail")
//    private String userEmail;
    @Column(name = "answerTemperature")
    private BigDecimal answerTemperature;
    @Column(name = "answerLight")
    private BigDecimal answerLight;
    @Column(name = "answerWater")
    private BigDecimal answerWater;
    @Column(name = "answerLevel")
    private BigDecimal answerLevel;

    public static RecommandEntity toRecommandEntity(RecommandDTO recommandDTO) {
        RecommandEntity recommandEntity = new RecommandEntity();

        recommandEntity.setAnswerId(recommandDTO.getAnswerId());
//        recommandEntity.setUserEmail(recommandDTO.getUserEmail());
        recommandEntity.setAnswerTemperature(recommandDTO.getAnswerTemperature());
        recommandEntity.setAnswerLight(recommandDTO.getAnswerLight());
        recommandEntity.setAnswerWater(recommandDTO.getAnswerWater());
        recommandEntity.setAnswerLevel(recommandDTO.getAnswerLevel());
        return recommandEntity;
    }
}
