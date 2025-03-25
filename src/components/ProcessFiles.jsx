import React from "react";
import * as XLSX from "xlsx";

const REQUIRED_COLUMNS = [
    "Student Register No.",
    "Admn No.",
    "Student Name",
    "Block Description",
    "Transaction-Type",
    "G No",
    "OT",
    "OPurpose",
    "IT",
    "IPurpose",
    "Duration",
    "Total-Duration"
];

const ProcessFiles = ({ files, duration, onProcessComplete }) => {
    const processFiles = async () => {
        const filteredData = [];

        for (const file of files) {
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Check if required columns are present
            const fileColumns = Object.keys(jsonData[0] || {});
            const missingColumns = REQUIRED_COLUMNS.filter(col => !fileColumns.includes(col));

            if (missingColumns.length > 0) {
                alert(`Missing columns: ${missingColumns.join(", ")}`);
                return;
            }

            // Convert duration to seconds for comparison
            const maxDuration = duration.split(":").reduce((acc, time) => 60 * acc + +time, 0);

            const validRecords = jsonData.filter((record) => {
                if (!record.Duration) return false;

                const recordDuration = record.Duration.split(":").reduce((acc, time) => 60 * acc + +time, 0);
                return recordDuration >= maxDuration;
            });

            filteredData.push(...validRecords);
        }

        if (filteredData.length === 0) {
            alert("No students have exceeded the set duration.");
        }

        onProcessComplete(filteredData);
    };

    return (
        <button onClick={processFiles} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Process Files
        </button>
    );
};

export default ProcessFiles;
