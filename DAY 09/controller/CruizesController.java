package com.java.aqua.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.aqua.model.Cruizes;
import com.java.aqua.service.CruizesService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/cruizes")
@RequiredArgsConstructor
@Tag(name="Admin Cruizes Service", description=" To Perform CRUD Operations On The Models Of Cruizes")


public class CruizesController {
    
    @Autowired
    CruizesService service;

    @PostMapping("/add")
    public boolean create(@RequestBody Cruizes book) {
        return service.addService(book);
    }

    @GetMapping("/get")
    public List<Cruizes> read() {
        return service.getServices();
    }

    @PutMapping("/put/{cruizeModel}")
    public boolean updateBookings(@PathVariable String cruizeModel, @RequestBody Cruizes services) {
        if (service.updateBookings(cruizeModel, services)) {
            return true;
        } 
        else {
            return false;
        }
    }

    @DeleteMapping("/delete/{cruizeModel}")
public boolean deleteServiceByCruizeModel(@PathVariable String cruizeModel) {
    if (service.deleteServiceByCruizeModel(cruizeModel)) {
        return true;
    } else {
        return false;
    }
}

}