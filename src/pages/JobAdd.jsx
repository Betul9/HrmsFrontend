import { useFormik } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";
import JobService from "../services/JobService";

export default function JobAdd() {
  
  let jobService = new JobService()

  function handleSubmit(job){
    job.employer.id = 1;
    jobService.addJob(job);
  }

  const formik = useFormik({
    initialValues: {
      jobName: "",
      jobDescription: "",
      city: "",
      minSalary: "",
      maxSalary: "",
      employeeNumber: "",
      employer:{
        id:""
      },
      lastAppeal: "",
      workingTime: "",
      workingType: "",
    },
    onSubmit: (values) => {
      console.log(formik.values);
      values.employer.id=1;
      jobService.addJob(values);
    },
  });

  return (
    <div>
      
       <Form onSubmit={formik.handleSubmit}>
        <Form.Field fluid>
          <Form.Input name="jobName" id="jobName" value={formik.values.jobName} label='Job Name' placeholder='Job Name' type="text" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="jobDescription" id="jobDescription" value={formik.values.jobDescription} label='Job Description' placeholder='Job Description' type="text" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="city" id="city" value={formik.values.city} label='City' placeholder='City' type="text" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="minSalary" id="minSalary" value={formik.values.minSalary} label='Minimum Salary' placeholder='Minimum Number' type="number" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="maxSalary" id="maxSalary" value={formik.values.maxSalary} label='Maximum Salary' placeholder='Maximum Number' type="number" onChange={formik.handleChange}/>
        </Form.Field>
        {/* <Form.Field>
          <Form.Input value={formik.values.adOwner} label='Ad Owner' placeholder='Ad Owner' />
        </Form.Field> */}
        <Form.Field>
          <Form.Input name="employeeNumber" id="employeeNumber" value={formik.values.employeeNumber} label='Required Number of Worker' placeholder='Required Number of Worker' type="number" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="lastAppeal" id="lastAppeal" value={formik.values.lastAppeal} label='Last Appeal Date' placeholder='Last Appeal Date' type="date" onChange={formik.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Radio
            name="workingTime" label='Full-Time' value="Full-Time"
            checked={formik.values.workingTime === "Full-Time"}
            onChange={() => formik.setFieldValue("workingTime", "Full-Time")}
          />
          <Form.Radio
            name="workingTime" label='Part-Time' value="Part-Time"
            checked={formik.values.workingTime === "Part-Time"}
            onChange={() => formik.setFieldValue("workingTime", "Part-Time")}
          />
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Remote' value="Remote" name="workingType"
            checked={formik.values.workingType === "Remote"}
            onChange={() => formik.setFieldValue("workingType", "Remote")}
          />
          <Form.Radio
            label='Face-to-Face' value="Face-to-Face" name="workingType"
            checked={formik.values.workingType === "Face-to-Face"}
            onChange={() => formik.setFieldValue("workingType", "Face-to-Face")}
          />
        </Form.Field>
        <Form.Button type="submit" disabled={formik.isSubmitting}>Submit</Form.Button>
      </Form> 
    </div>
  );
}
