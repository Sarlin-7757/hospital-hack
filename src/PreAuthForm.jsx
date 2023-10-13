import React from 'react'
import {useState} from "react"
import "./preauthForm.css"
export const PreAuthForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        doctorName: '',
        hospitalName: '',
        pastHistory: '',
        durationOfComplaints: '',
        clinicalFindings: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileUpload = (e) => {
        // This function can be used to handle file uploads
        const file = e.target.files[0];
        // You can store or process the file here
      };
    
      const handlePdfUpload = (type) => {
        alert(`File of type '${type}' uploaded!`);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here or send data to an API
      };
    
      return (
        <div className="medical-form-container">
          <h2>Pre-Auth Information Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="doctorName">Doctor Name</label>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalName">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pastHistory">Patient Past History</label>
              <textarea
                name="pastHistory"
                value={formData.pastHistory}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="durationOfComplaints">Duration of Complaints</label>
              <input
                type="text"
                name="durationOfComplaints"
                value={formData.durationOfComplaints}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="clinicalFindings">Clinical Findings</label>
              <textarea
                name="clinicalFindings"
                value={formData.clinicalFindings}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="clinicalFindings">Proposed Treatment Plan</label>
              <input
                type='file'
                id='proposedTreatmentPlan'
                accept='.pdf'
                onChange={handleFileUpload}
               />
              <button type='submit' onClick={() =>handlePdfUpload('Proposed Treatment Plan')}>
    
              Upload Pdf</button>
                
              
            </div>
             <div className="form-group">
              <label htmlFor="clinicalFinding">Investigation Report</label>
             <input
                type='file'
                id='Investigation Report'
                accept='.pdf'
                onChange={handleFileUpload}
               />
              <button type='submit' onClick={() =>handlePdfUpload('Investigation Report')}>
    
              Upload Pdf</button>
                
              
            </div>
            
             <div className="form-group">
              <label htmlFor="clinicalFinding">UPLOAD: Pre Auth Manually.</label>
              <input type="file" id='PreAuthManulaly ' />
              <button type='submit'>
                
    
              Upload Pdf</button>
                
              
            </div>
            <button type="submit" onClick={() =>handlePdfUpload('Form ')}>Submit</button>
 


          </form>
        </div>
      )
}
