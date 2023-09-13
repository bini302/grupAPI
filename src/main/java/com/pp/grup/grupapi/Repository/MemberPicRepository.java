package com.pp.grup.grupapi.Repository;

import com.pp.grup.grupapi.Entity.MemberPicEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberPicRepository extends JpaRepository<MemberPicEntity, String>{
    Optional<MemberPicEntity> findByMemberPicId(Long memberPicId);
//    String getMemberPicURLById(Long memberPicId);
}