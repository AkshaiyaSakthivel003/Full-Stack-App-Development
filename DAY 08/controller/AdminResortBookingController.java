package com.java.aqua.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.aqua.dto.AdminResortBookingDto;
import com.java.aqua.model.ResortBooking;
import com.java.aqua.service.AdminResortBookingService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/resortbookings")
@RequiredArgsConstructor
@Tag(name="Admin Resort Bookings", description=" To Authorize The Models Of Cruizes And User Bookings")

public class AdminResortBookingController {

    @Autowired
    AdminResortBookingService adminResortBookingService;

    @GetMapping("/get")
    public List<ResortBooking> read() {
        return adminResortBookingService.getResortBookings();
    }

    @GetMapping("/get/{name}")
    public List<ResortBooking> getBookingsByName(@PathVariable String name) {
        return adminResortBookingService.getResortBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateUser(@PathVariable String name, @RequestBody AdminResortBookingDto bookings) {
        if (adminResortBookingService.updateUser(name, bookings)) {

            return true;
        } 
        else {
            return false;
        }
    }

}
