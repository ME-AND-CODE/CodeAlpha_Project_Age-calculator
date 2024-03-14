# CodeAlpha_Project_Age-calculator<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Age Calculator</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<form id="ageCalculator">
    <h2>Age Calculator</h2>
    <input type="text" id="dob" placeholder="Date of Birth (dd)">
    <select id="month">
        <option value="">Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>
    <input type="text" id="year" placeholder="Year">
    <input type="submit" value="Calculate Age">
</form>

<div id="result"></div>
<script src="script.js"></script>
</body>
</html>
