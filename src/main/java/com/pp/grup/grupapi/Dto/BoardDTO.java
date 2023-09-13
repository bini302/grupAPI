package com.pp.grup.grupapi.Dto;

import com.pp.grup.grupapi.Entity.Board;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardDTO {
    private Integer id;
    private String title;
    private String content;
    private String filename;
    private String filepath;
    private String memberName;
    private LocalDateTime boardDate;

    public static BoardDTO toBoardDTO(Board board){
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setId(board.getId());
        boardDTO.setTitle(board.getTitle());
        boardDTO.setContent(board.getContent());
        boardDTO.setFilename(board.getFilename());
        boardDTO.setFilepath(board.getFilepath());
        boardDTO.setMemberName(board.getMemberName());
        boardDTO.setBoardDate(board.getBoardDate());
        return boardDTO;
    }
}
