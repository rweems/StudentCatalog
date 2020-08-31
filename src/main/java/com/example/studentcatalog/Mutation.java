package com.example.studentcatalog;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.repository.StudentRepository;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {

    private final StudentRepository studentRepository;

    public Mutation(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student addStudent(StudentInput studentInput){
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
