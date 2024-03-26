package com.java.aqua.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.java.aqua.model.Cruizes;

public interface CruizesRepository extends JpaRepository<Cruizes,Integer>{
    
    
    void deleteServiceByCruizeModel(String cruizeModel);

    @Query("SELECT s FROM Cruizes s WHERE s.cruizeModel = :cruizeModel AND s.available = :available")
    Cruizes isServiceAvailable(String cruizeModel, boolean available);

    Cruizes findServiceByCruizeModel(String cruizeModel);
}
