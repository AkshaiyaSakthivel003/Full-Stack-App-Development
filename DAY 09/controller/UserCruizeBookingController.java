package com.java.aqua.controller;

import org.springframework.web.bind.annotation.RestController;

import com.java.aqua.dto.UserCruizeBookingDto;
import com.java.aqua.model.CruizeBooking;
import com.java.aqua.service.UserCruizeBookingService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Tag(name="User Cruize Bookings ", description=" To Verify And Update The Models Of Cruizes Booked By User")


public class UserCruizeBookingController {

    @Autowired
    UserCruizeBookingService bookingsDtoService;

    @PostMapping("/post")
    public String addBooking(@RequestBody UserCruizeBookingDto bookingsDto) {
        String result=bookingsDtoService.addBooking(bookingsDto);
           return result;
    }

    @GetMapping("/get/{name}")
    public List<CruizeBooking> getBookingsByName(@PathVariable String name) {
        return bookingsDtoService.getBookingsByName(name);
    }

    @PutMapping("/put/{name}")
    public boolean updateBookings(@PathVariable String name, @RequestBody UserCruizeBookingDto bookings) {
        if (bookingsDtoService.updateBookings(name, bookings)) {
            return true;
        } 
        else {
            return false;
        }
    }

    @DeleteMapping("/delete/{name}")
    public boolean deleteBookingByName(@PathVariable String name) {
        if (bookingsDtoService.deleteBookingByName(name)) {
            return true;
        } 
        else {
            return false;
        }
    }
}