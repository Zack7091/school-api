# School API

A full-stack backend API built with **Node.js**, **Express**, and **PostgreSQL**, deployed live on **Render**. This API supports:

- Adding new school data
- Searching for schools
- Generating downloadable **PDF summaries**  
All built with production-level practices.

---

##  Live Demo

- 🔍 **Search Endpoint** (GET):  
  `https://school-api-036e.onrender.com/api/schools/search?query=STD001`

- ➕ **Add School Endpoint** (POST):  
  `https://school-api-036e.onrender.com/api/schools/addSchool`

---

##  Features

- 🔍 Search by Student ID, Name, or School
- ➕ Add new schools to the database via POST
- 📄 Generate PDF summaries using PDFKit
- 🌐 Hosted live on **Render**
- 🧪 Fully testable via Postman

---

##  How to Use via Postman

### 1. Search for School (GET)
```http
GET https://school-api-036e.onrender.com/api/schools/search?query=STD001

POST https://school-api-036e.onrender.com/api/schools/addSchool
Content-Type: application/json

Body:
{
  "school_name": "Modern Public School",
  "student_name": "Ali Khan",
  "student_id": "STD002",
  "class": "10th",
  "district": "Patna",
  "state": "Bihar"
}
