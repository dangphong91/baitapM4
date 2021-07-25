package com.phong.ajax.service.country;

import com.phong.ajax.model.Country;

import java.util.Optional;

public interface ICountryService {

    Iterable<Country> findAll();

    Optional<Country> findById(Long id);
}