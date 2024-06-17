import React from 'react';

interface FeedbackProps {
  name: string;
  email: string;
  message: string;
}

interface TableProps {
  options: FeedbackProps[];
}

const Table: React.FC<TableProps> = ({ options }) => {
  const headers = options.length > 0 ? Object.keys(options[0]) : [];

  return (
    <table className="overflow-x-auto border-collapse border border-gray-300 mx-2">
      <thead className="bg-brand-200">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2">
              {header.charAt(0).toUpperCase() + header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-brand-50">
        {options.map((option, rowIndex) => (
          <tr key={rowIndex} className="text-brand-300">
            {headers.map((header, colIndex) => (
              <td key={colIndex} className="border border-gray-300 px-4 py-2">
                {option[header as keyof FeedbackProps]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
