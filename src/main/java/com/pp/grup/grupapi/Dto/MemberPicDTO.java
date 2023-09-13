package com.pp.grup.grupapi.Dto;

import com.pp.grup.grupapi.Entity.MemberPicEntity;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberPicDTO {
    private Long memberPicId;
    private String memberPicName;
    private String memberPicURL;

    public static MemberPicDTO toMemberPicDTO(MemberPicEntity memberPicEntity){
        MemberPicDTO memberPicDTO=new MemberPicDTO();
        memberPicDTO.setMemberPicId(memberPicEntity.getMemberPicId());
        memberPicDTO.setMemberPicName(memberPicEntity.getMemberPicName());
        memberPicDTO.setMemberPicURL(memberPicEntity.getMemberPicURL());

        return memberPicDTO;
    }

}

