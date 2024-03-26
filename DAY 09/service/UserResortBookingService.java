package com.java.aqua.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.aqua.dto.UserResortBookingDto;
import com.java.aqua.model.ResortBooking;
import com.java.aqua.model.Resorts;
import com.java.aqua.model.User;
import com.java.aqua.repository.ResortBookingRepository;
import com.java.aqua.repository.ResortsRepository;
import com.java.aqua.repository.UserRepository;
@Service
public class UserResortBookingService {


    @Autowired
    private ResortBookingRepository bookingRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ResortsRepository servicesRepo;

    // done by user
    //@SuppressWarnings("null")
    public String addResortBooking(UserResortBookingDto userResortBookingDto) {
        ResortBooking booking = new ResortBooking();
        booking.setUserId(userResortBookingDto.getUserId());
        booking.setName(userResortBookingDto.getName());
        booking.setMobile(userResortBookingDto.getMobile());
        booking.setRoomType(userResortBookingDto.getRoomType());
        booking.setPerson(userResortBookingDto.getPerson());
        booking.setPrice(userResortBookingDto.getPrice());
        booking.setCheckInDate(userResortBookingDto.getCheckInDate());
        booking.setCheckOutDate(userResortBookingDto.getCheckOutDate());
        User existingUser = userRepo.findByName(userResortBookingDto.getName());
        Resorts resortAvailable = servicesRepo.isResortAvailable(userResortBookingDto.getRoomType(), true);
        
        if (existingUser == null) {
            return "Provide the registered Username";
        } 
        else if (resortAvailable == null) {
            return "Oops!! Service Unavailable";
        }
        else {
            bookingRepo.save(booking);
            return "Booking Confirmed";
        }

    }

    // visible in user side
    public List<ResortBooking> getResortBookingsByName(String name) {
        return bookingRepo.findResortBookingsByName(name);
    }

    // update by user
    public boolean updateResortBookings(String name, UserResortBookingDto bookings) {

        ResortBooking existingUser = bookingRepo.findUserByName(name);
        if (existingUser != null) {

            existingUser.setMobile(bookings.getMobile());
            existingUser.setRoomType(bookings.getRoomType());
            existingUser.setPerson(bookings.getPerson());
            existingUser.setPrice(bookings.getPrice());
            existingUser.setCheckInDate(bookings.getCheckInDate());
            existingUser.setCheckOutDate(bookings.getCheckOutDate());

            bookingRepo.save(existingUser);
            return true;
        } else {
            return false;
        }
    }

    // delete by user
    public boolean deleteResortBookingByName(String name) {
        ResortBooking existingBooking = bookingRepo.findUserByName(name);
        if (existingBooking != null) {
            bookingRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }

}