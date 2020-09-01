package com.example.professor.service;

import com.example.professor.models.Student;
import com.example.professor.repository.ProfessorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    private ProfessorRepository professorRepository;


    public ProfessorService(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    public void saveStudent(Student student) {
        professorRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return professorRepository.findAll();
    }

    public void deleteStudent(Long id) {
        professorRepository.deleteById(id);
    }

    public void updateStudent(Long id, Student newStudent) {
        Optional<Student> student = findStudentById(id);
        System.out.println(student.get().getFirstName());
        student.get().setFirstName(newStudent.getFirstName());
        student.get().setLastName(newStudent.getLastName());
        student.get().setSSN(newStudent.getSSN());
        professorRepository.save(student.get());
    }

    public Optional<Student> findStudentById(Long Id) {
        return professorRepository.findById(Id);
    }

}
