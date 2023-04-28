import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';

const root = ReactDOM.createRoot(document.getElementById('root'));
registerLicense('Mgo+DSMBaFt+QHFqVkNrWU5GcUBAXWFKblt8QGBTeltgBShNYlxTR3ZbQFpjQH9bd0VmX3dc;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BAWnxLflF1VWtTel16cVBWESFaRnZdQV1nS3lTf0RrWH9YdHZX;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdX2RWfFN0RnNRdVtzflBDcC0sT3RfQF5jTXxUdkxiUX5edn1VRA==;MTg1OTI3N0AzMjMxMmUzMTJlMzMzNWY1Mm1lU1J2NDJ1SEJFaFJSWEJseEQ4RWx5MFQvV1ZieG9aa0xqOUJHNWs9;MTg1OTI3OEAzMjMxMmUzMTJlMzMzNW0vZlF5dlltRk9NOGFLL2dSMElLeGl1VTBKLzJtSnc3VE5SWXZDRWJYYk09;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmFOYVF2R2BJd1R1d19DZUwgOX1dQl9gSXpRcUVqWHdfcH1WRGM=;MTg1OTI4MEAzMjMxMmUzMTJlMzMzNVh6d1RteE02eTZoWWxCN3VzTGd0aXl1d3BqVlRHMXR0QWRqaWs0VTNBZ1U9;MTg1OTI4MUAzMjMxMmUzMTJlMzMzNWVNZ2phVldwcFEycE5KWjhudjFSbXJzR1lydzA5WXBUY2JpVzJsb2xHQ3c9;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdX2RWfFN0RnNRdVtzflBDcC0sT3RfQF5jTXxUdkxiUX5fcX1TRQ==;MTg1OTI4M0AzMjMxMmUzMTJlMzMzNUkwVDk5WXMyelY0eFdyeitBWnN3OTdRMmJYNk1uT2lHMTUvZmJVVW5SZUU9;MTg1OTI4NEAzMjMxMmUzMTJlMzMzNVlXOEJHV1NkRFM5UjBVSzFjN3FySTFJdWhVVFBVRUFZTEE4bGViZlpCODA9;MTg1OTI4NUAzMjMxMmUzMTJlMzMzNVh6d1RteE02eTZoWWxCN3VzTGd0aXl1d3BqVlRHMXR0QWRqaWs0VTNBZ1U9');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
