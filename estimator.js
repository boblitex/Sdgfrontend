const btn = document.querySelector('.button');



btn.addEventListener("click", () => {
    data = {
        ...data,
        periodType: document.querySelector('select#PeriodType').value,
        timeToElapse: document.querySelector('input#timeToElapse').value,
        reportedCases: document.querySelector('input#reportedCases').value,
        population: document.querySelector('input#population').value,
        totalHospitalBeds: document.querySelector('input#totalHospitalBeds').value
    }
})

