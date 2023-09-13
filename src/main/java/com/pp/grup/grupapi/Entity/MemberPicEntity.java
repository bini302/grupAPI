package com.pp.grup.grupapi.Entity;

import com.pp.grup.grupapi.Dto.MemberPicDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "userpic")
public class MemberPicEntity {
    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userPicId")
    private Long memberPicId;
    @Column(name = "userPicName")
    private String memberPicName;
    @Column(name = "userPicURL")
    private String memberPicURL;
    public static MemberPicEntity toMemberPicEntity(MemberPicDTO memberPicDTO){
        MemberPicEntity memberPicEntity = new MemberPicEntity();
        memberPicEntity.setMemberPicId(memberPicDTO.getMemberPicId());
        memberPicEntity.setMemberPicName(memberPicDTO.getMemberPicName());
        memberPicEntity.setMemberPicURL(memberPicDTO.getMemberPicURL());
        return memberPicEntity;
    }
}
