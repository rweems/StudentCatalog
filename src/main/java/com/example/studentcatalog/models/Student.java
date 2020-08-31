package com.example.studentcatalog.models;

import javax.persistence.*;


@Entity
public class Student {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "my_sequence")
    @SequenceGenerator(
            name = "my_sequence",
            initialValue = 1000,
            allocationSize = 10)
    private long id;
    private String firstName;
    private String lastName;
    private long SSN;

    public Student() {
    }

    public Student(String firstName, String lastName, long SSN) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.SSN = SSN;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public long getSSN() {
        return SSN;
    }

    public void setSSN(long SSN) {
        this.SSN = SSN;
    }
}
