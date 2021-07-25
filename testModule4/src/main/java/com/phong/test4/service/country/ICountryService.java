package com.phong.test4.service.country;

import com.phong.test4.model.Country;

public interface ICountryService {

    Iterable<Country> findAll();
}