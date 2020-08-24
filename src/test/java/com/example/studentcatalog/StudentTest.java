package com.example.studentcatalog;

import com.example.studentcatalog.models.Student;
import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.assertEquals;

public class StudentTest {

    @Test
    void testStudent() {
        Student student = new Student("Rickey","Weems",1234);
        assertEquals("Rickey", student.getFirstName());
        assertEquals("Weems", student.getLastName());
        assertEquals(1234, student.getSSN());


    }
}
