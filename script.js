
    document.getElementById('ageCalculator').addEventListener('submit', function(e) {
        e.preventDefault();

        var dob = document.getElementById('dob').value;
        var month = document.getElementById('month').value;
        var year = document.getElementById('year').value;

        if (dob && month && year) {
            var birthDate = new Date(year, month - 1, dob);
            var ageDifMs = Date.now() - birthDate.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var age = Math.abs(ageDate.getUTCFullYear() - 1970);
            
            document.getElementById('result').innerHTML = "Your age is: " + age;
        } else {
            document.getElementById('result').innerHTML = "Please fill out all fields.";
        }
    });
