import axios from "axios"

export default class JobService{
    getJobs(){
        return axios.get("http://localhost:8080/api/jobs/getall")
    }

    getJobsActive(){
        return axios.get("http://localhost:8080/api/jobs/getbyisactivetrue")
    }

    getJobsNotActive(){
        return axios.get("http://localhost:8080/api/jobs/getbyisactivefalse")
    }

    addJob(values){
        return axios.post("http://localhost:8080/api/jobs/add", values)
    }
}