package com.example.studentcatalog;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.repository.StudentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Query implements GraphQLQueryResolver {
    private final StudentRepository studentRepository;

    public Query(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    public List<Student> students() {
       return studentRepository.findAll();
    }

    public Student student(Long id){
        return studentRepository.findById(id).orElse(null);
    }
}
