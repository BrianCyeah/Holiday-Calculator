function calculateLeave() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    const start = new Date(`2023-01-01T${startTime}:00`);
    const end = new Date(`2023-01-01T${endTime}:00`);
    const duration = (end - start) / 3600000; // Convert to hours

    document.getElementById('result').innerText = `You will take ${duration.toFixed(2)} hours of leave.`;
}
