export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

export interface Pet {
  id: string;
  name: string;
  mood: string;
  streak: number;
  user_id: string;
}

export interface Workout {
  id: string;
  type: string;
  duration: number;
  user_id: string;
  completed_at: string;
}
