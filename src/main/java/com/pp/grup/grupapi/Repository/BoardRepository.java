package com.pp.grup.grupapi.Repository;

import com.pp.grup.grupapi.Entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
    Page<Board> findByTitleContaining(String searchKeyword, Pageable pageable);

    Page<Board> findAll(Pageable pageable);

    List<Board> findByMemberName(String memberName);
}
