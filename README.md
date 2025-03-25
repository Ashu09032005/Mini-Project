# Excel Filter App

## Overview
The **Excel Filter App** is a React-based web application that allows users to upload Excel files, filter records based on a specified duration limit, and download the filtered results.

## Features
- Upload multiple Excel files (`.xlsx` or `.xls`).
- Set a duration threshold to filter records.
- Process and extract records that exceed the given duration.
- Download the filtered data as an Excel file.

## Project Structure
```sh
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



##Usage
1)Upload an Excel file (.xlsx or .xls).
2)Set a duration threshold (e.g., 02:00:00).
3)Click on Process Files to filter records that exceed the duration.
4)Download the filtered records as an Excel file.
