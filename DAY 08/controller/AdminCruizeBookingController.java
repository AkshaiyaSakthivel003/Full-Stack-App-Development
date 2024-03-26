package com.java.aqua.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.aqua.dto.AdminCruizeBookingDto;
import com.java.aqua.model.CruizeBooking;
import com.java.aqua.service.AdminCruizeBookingService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
@Tag(name="Admin Cruize Bookings", description=" To Authorize The Models Of Cruizes And User Bookings")

public class AdminCruizeBookingController {

    @Autowired
    AdminCruizeBookingService service;

    @GetMapping("/get")
    public List<CruizeBooking> read() {
        return service.getBookings();
    }

    @GetMapping("/get/{name}")
    public List<CruizeBooking> getBookingsByName(@PathVariable String name) {
        return service.getBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateUser(@PathVariable String name, @RequestBody AdminCruizeBookingDto bookings) {
        if (service.updateUser(name, bookings)) {

            return true;
        } 
        else {
            return false;
        }
    }

}