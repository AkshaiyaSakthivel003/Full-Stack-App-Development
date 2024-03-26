package com.java.aqua.controller;

import com.java.aqua.model.Resorts;
import com.java.aqua.service.ResortsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("aqua/api/v1/resorts")
@RequiredArgsConstructor
@Tag(name="Admin Resorts Service", description=" To Perform CRUD Operations On The Models Of Cruizes")

public class ResortsController {

    @Autowired
    private ResortsService resortsService;

    @GetMapping
    public List<Resorts> getAllResorts() {
        return resortsService.getAllResorts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resorts> getResortById(@PathVariable int id) {
        Resorts resort = resortsService.getResortById(id);
        if (resort != null) {
            return ResponseEntity.ok(resort);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Object> addResort(@RequestBody Resorts resort) {
        return resortsService.addResort(resort);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateResort(@PathVariable int id, @RequestBody Resorts resort) {
        return resortsService.updateResort(id, resort);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteResort(@PathVariable int id) {
        return resortsService.deleteResort(id);
    }
}
