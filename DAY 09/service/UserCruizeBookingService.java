package com.java.aqua.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.java.aqua.dto.UserCruizeBookingDto;
import com.java.aqua.model.CruizeBooking;
import com.java.aqua.model.Cruizes;
import com.java.aqua.model.User;
import com.java.aqua.repository.CruizeBookingRepository;
import com.java.aqua.repository.CruizesRepository;
import com.java.aqua.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserCruizeBookingService {

    private final CruizeBookingRepository bookingRepo;

    private final UserRepository userRepo;

    private final CruizesRepository servicesRepo;


    public String addBooking(UserCruizeBookingDto bookingsDto) {
        CruizeBooking booking = new CruizeBooking();
        booking.setUserId(bookingsDto.getUserId());
        booking.setName(bookingsDto.getName());
        booking.setMobile(bookingsDto.getMobile());
        booking.setCruizeModel(bookingsDto.getCruizeModel());
        booking.setPrice(bookingsDto.getPrice());
        booking.setCheckInDate(bookingsDto.getCheckInDate());
        booking.setCheckOutDate(bookingsDto.getCheckOutDate());
        booking.setSource(bookingsDto.getSource());
        booking.setDestination(bookingsDto.getDestination());
        User existingUser = userRepo.findByName(bookingsDto.getName());
        Cruizes serviceAvailable = servicesRepo.isServiceAvailable(bookingsDto.getCruizeModel(), true);
        
        if (existingUser == null) {
            return "Provide the registered Username";
        } 
        else if (serviceAvailable == null) {
            return "Oops!! Service Unavailable";
        } 
        else {
            bookingRepo.save(booking);
            return "Booking Confirmed";
        }

    }


    public List<CruizeBooking> getBookingsByName(String name) {
        return bookingRepo.findBookingsByName(name);
    }


    public boolean updateBookings(String name, UserCruizeBookingDto bookings) {

        CruizeBooking existingUser = bookingRepo.findUserByName(name);
        if (existingUser != null) {

            existingUser.setMobile(bookings.getMobile());
            existingUser.setCruizeModel(bookings.getCruizeModel());
            existingUser.setPrice(bookings.getPrice());
            existingUser.setCheckInDate(bookings.getCheckInDate());
            existingUser.setCheckOutDate(bookings.getCheckOutDate());
            existingUser.setSource(bookings.getSource());
            existingUser.setDestination(bookings.getDestination());

            bookingRepo.save(existingUser);
            return true;
        } else {
            return false;
        }
    }

    // delete by user
    public boolean deleteBookingByName(String name) {
        CruizeBooking existingBooking = bookingRepo.findUserByName(name);
        if (existingBooking != null) {
            bookingRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }

}