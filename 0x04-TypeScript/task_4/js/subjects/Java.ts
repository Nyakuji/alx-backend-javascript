namespace Subjects {
    // Extend the Teacher interface with a new attribute
    export interface Teacher {
      experienceTeachingJava?: number;
      firstName: string; // Assuming firstName is a required property
    }
  
    // Define the Java class that extends from a base Subject class (assuming it's imported correctly)
    export class Java /*extends Subjects.Subject*/ {
      private teacher: Teacher | undefined; // Define teacher property
  
      constructor(teacher?: Teacher) {
        this.teacher = teacher;
      }
  
      // Method to get Java requirements
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      // Method to get available teacher for Java
      getAvailableTeacher(): string {
        if (!this.teacher || !this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }