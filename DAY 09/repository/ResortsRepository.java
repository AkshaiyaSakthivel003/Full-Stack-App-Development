package com.java.aqua.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.java.aqua.model.Resorts;


@Repository
public interface ResortsRepository extends JpaRepository<Resorts, Integer>{

    void deleteServiceByRoomType(String roomType);

    @Query("SELECT s FROM Resorts s WHERE s.roomType = :roomType AND s.available = :available")
    Resorts isResortAvailable(String roomType, boolean available);

    Resorts findServiceByRoomType(String roomType);
    
}
