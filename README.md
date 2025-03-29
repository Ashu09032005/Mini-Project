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
![image](https://github.com/user-attachments/assets/aefd4749-bb9e-4fa5-a60c-2e25e9a7d3fb)

![image](https://github.com/user-attachments/assets/3f3d107b-6683-4353-b9e3-9e53a3e92bf8)

INPUT(excel files):
![image](https://github.com/user-attachments/assets/c2011401-892e-4812-b733-b922567539ee)

![image](https://github.com/user-attachments/assets/5bb8c042-07d9-4a20-a99b-165bd84ecf32)

![image](https://github.com/user-attachments/assets/bf02c82f-3383-4b59-9b7a-76feee73a002)

![image](https://github.com/user-attachments/assets/0f9f3eb1-0537-4eee-98f0-579035a25443)

![image](https://github.com/user-attachments/assets/b68001c4-fad4-42c6-a975-1900fc13de84)





OUTPUT:
![image](https://github.com/user-attachments/assets/83be0b9c-1e69-4716-a8fe-51689895cda9)





