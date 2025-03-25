# Excel Filter App

## Overview
The **Excel Filter App** is a React-based web application that allows users to upload Excel files, filter records based on a specified duration limit, and download the filtered results.

## Features
- Upload multiple Excel files (`.xlsx` or `.xls`).
- Set a duration threshold to filter records.
- Process and extract records that exceed the given duration.
- Download the filtered data as an Excel file.

## Project Structure
```
excel-filter-app/     # Root project directory
│── public/           # Public assets
│── src/              # Main source code
│   ├── components/   # Reusable React components
│   │   ├── FileUpload.js       # Handles file selection (FilePond)
│   │   ├── DurationInput.js    # Input field for duration limit
│   │   ├── ProcessFiles.js     # Reads, filters, and processes Excel files
│   │   ├── DownloadResult.js   # Allows downloading the filtered file
│   ├── App.js        # Main React component
│   ├── index.js      # Entry point for the app
│   ├── styles.css    # Global styles (using Tailwind CSS)
│── package.json      # Dependencies and scripts
│── tailwind.config.js # Tailwind CSS config
│── .gitignore        # Git ignore file
│── README.md         # Project documentation
```

## Installation & Setup

Follow these steps to run the project locally:

### Clone the repository:
```sh
git clone https://github.com/your-username/excel-filter-app.git
cd excel-filter-app
```

### Install dependencies:
```sh
npm install
```

### Start the development server:
```sh
npm run dev
```

## Usage
1. Upload an Excel file (`.xlsx` or `.xls`).
2. Set a duration threshold (e.g., `02:00:00`).
3. Click on **Process Files** to filter records that exceed the duration.
4. Download the filtered records as an Excel file.

## Technologies Used
- **React.js** – Frontend framework.
- **Tailwind CSS** – Styling.
- **XLSX.js** – Excel file processing.
  
## See for yourself
![image](https://github.com/user-attachments/assets/1b7dd125-4008-4ed1-8410-1e1a2c6faefc)
![image](https://github.com/user-attachments/assets/3da4913e-76ee-4c15-b0de-74829ecccc62)
INPUT(excel files):
![image](https://github.com/user-attachments/assets/8459bc29-e46f-4dfe-8c55-d1c0fb669f71)
![image](https://github.com/user-attachments/assets/6ec72ef1-ef2f-4dd3-97c2-dadabf1e5320)
![image](https://github.com/user-attachments/assets/170bc84e-a9cc-4cb1-9580-b99b3379cf27)
![image](https://github.com/user-attachments/assets/d2bacf81-cfb9-4bb7-ad24-d8b3573282f8)
![image](https://github.com/user-attachments/assets/78a2e94c-8a25-44e2-a3aa-1fee177b1885)




OUTPUT:
![image](https://github.com/user-attachments/assets/5cf4c2e0-af65-4739-b0e7-f6d5baae086e)




