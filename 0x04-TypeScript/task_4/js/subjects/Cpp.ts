namespace Subjects {
    // Extend the Teacher interface with a new attribute
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    // Define the Cpp class that extends from a base Subject class (assuming it's imported correctly)
    export class Cpp /*extends Subjects.Subject*/ {
      private teacher: Teacher | undefined; // Define teacher property
  
      constructor(teacher?: Teacher) {
        this.teacher = teacher;
      }
  
      // Method to get Cpp requirements
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      // Method to get available teacher for Cpp
      getAvailableTeacher(): string {
        if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }