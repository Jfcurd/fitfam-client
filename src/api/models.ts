export interface IExercise {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IExerciseSet {
  id?: number;
  workout_exersice_id?: number;
  reps?: number;
  weight?: number;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IWorkout {
  id?: number;
  user_id?: number;
  name?: string;
  started_at?: Date;
  ended_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  exercises?: IWorkoutExercise[];
}

export interface IWorkoutExercise {
  id?: number;
  workout_id?: number;
  exercise_id?: number;
  created_at?: Date;
  updated_at?: Date;
  exercise?: IExercise;
  sets?: IExerciseSet[];
}