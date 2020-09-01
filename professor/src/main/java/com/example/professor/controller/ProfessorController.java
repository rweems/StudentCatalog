package com.example.professor.controller;


import com.example.professor.models.Student;
import com.example.professor.service.ProfessorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class ProfessorController{


    private final ProfessorService professorService;



    public ProfessorController(ProfessorService professorService) {

        this.professorService = professorService;
    }


    @GetMapping("/professor")
    public List<Student> findAll(){
        return professorService.getAllStudents();
    }

    @GetMapping("/find/{id}")
    public Student findById(@PathVariable("id") Long id){
        Optional<Student> student = professorService.findStudentById(id);
        return student.orElse(null);
    }

    @PostMapping("/add")
    public void add(@RequestBody Student student ){
        professorService.saveStudent(student);
    }

    @PutMapping("/update/{id}")
    public void updateStudent(@PathVariable Long id, @RequestBody Student newStudent){
        Optional<Student> student = professorService.findStudentById(id);
        if(student.isPresent()){
            professorService.updateStudent(id, newStudent);
        }
        else {
            System.out.println("nothing found");
        }


    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id) {
        professorService.deleteStudent(id);
    }


}
