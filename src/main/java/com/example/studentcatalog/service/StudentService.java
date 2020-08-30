package com.example.studentcatalog.service;

import com.example.studentcatalog.models.Student;
import com.example.studentcatalog.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private StudentRepository studentRepository;


    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void saveStudent(Student student) {
        studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public void updateStudent(Long id, Student newStudent) {
        Optional<Student> student = findStudentById(id);
        System.out.println(student.get().getFirstName());
        student.get().setFirstName(newStudent.getFirstName());
        student.get().setLastName(newStudent.getLastName());
        student.get().setSSN(newStudent.getSSN());
        studentRepository.save(student.get());
    }

    public Optional<Student> findStudentById(Long Id) {
        return studentRepository.findById(Id);
    }

}
