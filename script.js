document.getElementById("rollNumberForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let classRoll = document.getElementById("classRoll").value.padStart(3, '0');
    let college = document.getElementById("college").value;
    let branch = document.getElementById("branch").value;
    let admissionYear = document.getElementById("admissionYear").value;
    
    let rollNumber = `${classRoll}${college}${branch}${admissionYear}`;
    document.getElementById("result").innerText = `Your Roll Number: ${rollNumber}`;
});
