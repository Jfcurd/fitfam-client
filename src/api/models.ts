export interface IExercise {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IExerciseSet {
  id?: number;
  workoutExersiceId?: number;
  reps?: number;
  weight?: number;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IWorkout {
  id?: number;
  userId?: number;
  name?: string;
  startedAt?: Date;
  endedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  exercises?: IWorkoutExercise[];
}

export interface IWorkoutExercise {
  id?: number;
  workoutId?: number;
  exerciseId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  exercise?: IExercise;
  sets?: IExerciseSet[];
}