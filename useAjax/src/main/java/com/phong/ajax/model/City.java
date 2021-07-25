package com.phong.ajax.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCity;

    @ManyToOne
    @JoinColumn(name = "countryId")
    private Country country;

    private String nameCity;
    private double area;
    private double population;
    private double gdp;
    private String description;

    public City(String nameCity, Country country, double area, double population, double gdp, String description) {
        this.nameCity = nameCity;
        this.country = country;
        this.area = area;
        this.population = population;
        this.gdp = gdp;
        this.description = description;
    }
}