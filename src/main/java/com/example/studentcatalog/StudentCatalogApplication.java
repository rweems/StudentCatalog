package com.example.studentcatalog;

import com.example.studentcatalog.controller.StudentController;
import com.example.studentcatalog.models.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class StudentCatalogApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(StudentCatalogApplication.class, args);

		StudentController studentController = (StudentController) ctx.getBean("studentController");
		Student student = new Student();
		student.setFirstName("Rickey");
		student.setLastName("Weems");
		student.setSSN(1234);
		studentController.save(student);

		Student student2 = new Student();
		student2.setFirstName("Amber");
		student2.setLastName("Crook");
		student2.setSSN(2345);
		studentController.save(student2);

		System.out.println("student 1: " + student.getId());
		System.out.println("student 2: " + student2.getId());

	}

}
