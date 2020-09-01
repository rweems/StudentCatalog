package com.example.student.controller;

import com.example.student.models.Student;
import com.example.student.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {


    private final StudentService studentService;



    public StudentController(StudentService studentService) {

        this.studentService = studentService;
    }


    @GetMapping("/students")
    public List<Student> findAll(){
        return studentService.getAllStudents();
    }

    @GetMapping("/find/{id}")
    public Student findById(@PathVariable("id") Long id){
        Optional<Student> student = studentService.findStudentById(id);
        return student.orElse(null);
    }

    @PostMapping("/add")
    public void add(@RequestBody Student student ){
        studentService.saveStudent(student);
    }

    @PutMapping("/update/{id}")
    public void updateStudent(@PathVariable Long id, @RequestBody Student newStudent){
        Optional<Student> student = studentService.findStudentById(id);
        if(student.isPresent()){
              studentService.updateStudent(id, newStudent);
        }
        else {
            System.out.println("nothing found");
        }


    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }


}
