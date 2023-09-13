package com.pp.grup.grupapi.Dto;

import com.pp.grup.grupapi.Entity.MemberEntity;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
//save에서 받는거 이름이 똑같으면 알아서 스프링에서 객체로 관리해줌
public class MemberDTO {
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberBirth;
    private String memberNum;
    private Long memberPicId;
//    private String plantsName;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO=new MemberDTO();
        memberDTO.setMemberEmail(memberEntity.getMemberEmail());
        memberDTO.setMemberPassword(memberEntity.getMemberPassword());
        memberDTO.setMemberName(memberEntity.getMemberName());
        memberDTO.setMemberBirth(memberEntity.getMemberBirth());
        memberDTO.setMemberNum(memberEntity.getMemberNum());
        memberDTO.setMemberPicId(memberEntity.getMemberPicId());
//        memberDTO.setPlantsName(memberEntity.getPlantsName());
        return memberDTO;
    }
}