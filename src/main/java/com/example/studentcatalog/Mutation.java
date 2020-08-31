package com.example.studentcatalog;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.repository.StudentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Mutation implements GraphQLMutationResolver {

    private final StudentRepository studentRepository;

    public Mutation(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody StudentInput studentInput){
       return studentRepository.save(new Student(
               studentInput.getFirstName(),
               studentInput.getLastName(),
               studentInput.getSsn()
        ));
    }
}


class StudentInput {
    private String firstName;
    private String lastName;
    private int ssn;

    public StudentInput() {
    }

    public StudentInput(String firstName, String lastName, int ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
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

    public int getSsn() {
        return ssn;
    }

    public void setSsn(int ssn) {
        this.ssn = ssn;
    }
}
