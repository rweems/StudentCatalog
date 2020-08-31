package com.example.studentcatalog;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.repository.StudentRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {
    private final StudentRepository studentRepository;

    public Query(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    public List<Student> students() {
       return studentRepository.findAll();
    }

    public Student student(Long id){
        return studentRepository.findById(id).orElse(null);
    }
}
