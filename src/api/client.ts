import axios, { AxiosInstance } from 'axios';
import { IWorkout } from './models';

class ApiClient {
  public Workouts = new Workouts(this);
  protected axiosClient: AxiosInstance;

  constructor(public baseURL?: string) {
    this.axiosClient = axios.create({
      baseURL: baseURL || 'http://localhost:3000',
    });

  }

  public async Get(path: string, params: any) {
    const { data } = await this.axiosClient.get(path, params);
    return data;
  }

  public async Post(path: string, params: any) {
    const { data } = await this.axiosClient.post(path, params);
    return data;
  }

  public async Put(path: string, params: any) {
    const { data } = await this.axiosClient.put(path, params);
    return data;
  }
}

class Workouts {
  constructor(protected client: ApiClient) { }

  public async get(params?: {}) {
    const resp = await this.client.Get('/workouts', params);
    return resp.data as IWorkout[];
  }

  public async createEmpty(params?: {}) {
    const resp = await this.client.Post('/workouts', params);
    return resp.data as IWorkout;
  }
}

const Client = new ApiClient('http://localhost:3000');
export default Client;