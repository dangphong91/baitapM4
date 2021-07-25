package com.phong.ajax.repository;

import com.phong.ajax.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICityRepository extends JpaRepository<City, Long> {
    Iterable<City> findAllByOrderByIdCityDesc();
}