package com.example.studentcatalog;

import com.example.studentcatalog.models.Professor;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ProfessorTest {
    @Test
    void testProfessor() {
        Professor prof = new Professor("Milton","TPike1");
        assertEquals("Milton", prof.getFirstName());

    }
}
