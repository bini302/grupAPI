package com.pp.grup.grupapi.Controller;


import com.pp.grup.grupapi.Entity.Product;
import com.pp.grup.grupapi.Service.JsoupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;


@RestController
@Transactional
public class JsoupController {

    @Autowired
    private JsoupService jsoupService;

    @PostMapping("/api/searchSubmit")
    public ResponseEntity<List<Product>> handleSubmit(@RequestBody String searchName) throws IOException {
//        System.out.println("들어온 이름 :  " + searchName);
        String stringWithQuotes = searchName;
        String stringWithoutQuotes = stringWithQuotes.replace("\"", "");
//        System.out.println("이름 확인용 :  " + stringWithoutQuotes);
        jsoupService.searchPlant(stringWithoutQuotes);

        List<Product> entities = jsoupService.getProductsBySearchName(stringWithoutQuotes);

        return ResponseEntity.ok(entities);
    }
}

