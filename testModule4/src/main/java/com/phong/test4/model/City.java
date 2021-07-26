package com.phong.test4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

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

    @Size(min = 2, max = 30)
    private String nameCity;
    @Min(0)
    private double area;
    @Min(0)
    private long population;
    @Min(0)
    private double gdp;
    private String description;

    public City(@Size(min = 2, max = 30) String nameCity, Country country,@Min(0) double area,@Min(0) long population,@Min(0) double gdp, String description) {
        this.nameCity = nameCity;
        this.country = country;
        this.area = area;
        this.population = population;
        this.gdp = gdp;
        this.description = description;
    }
}