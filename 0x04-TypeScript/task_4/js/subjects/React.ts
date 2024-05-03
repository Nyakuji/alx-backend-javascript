namespace Subjects {
    // Extend the Teacher interface with a new attribute
    export interface Teacher {
      experienceTeachingReact?: number;
      firstName: string; // Assuming firstName is a required property
    }
  
    // Define the React class that extends from a base Subject class (assuming it's imported correctly)
    export class React /*extends Subjects.Subject*/ {
      private teacher: Teacher | undefined; // Define teacher property
  
      constructor(teacher?: Teacher) {
        this.teacher = teacher;
      }
  
      // Method to get React requirements
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      // Method to get available teacher for React
      getAvailableTeacher(): string {
        if (!this.teacher || !this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }