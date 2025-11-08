
export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export enum CourseLevel {
  Beginner = 'مبتدئ',
  Intermediate = 'متوسط',
  Advanced = 'متقدم',
}

export interface Course {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  duration: string;
  price: string;
  level: CourseLevel;
  instructor: Instructor;
  modules: { title: string; lessons: string[] }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}
