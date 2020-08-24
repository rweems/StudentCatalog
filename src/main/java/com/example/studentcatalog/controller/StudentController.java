package com.example.studentcatalog.controller;

import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.service.StudentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
public class StudentController {


    private final StudentService studentService;


    public StudentController(StudentService studentService) {

        this.studentService = studentService;
    }


    public void save(Student student){
        studentService.saveStudent(student);

    }

    @GetMapping("/students")
    public List<Student> findAll(){
        return studentService.getAllStudents();
    }

    @GetMapping("/find/{id}")
    public String findById(@PathVariable(name = "id") Long id){
        Optional<Student> student = studentService.findStudentById(id);
        return student.get().getFirstName();
    }


}
