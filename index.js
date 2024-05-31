
//Bài tập quản lý tuyển sinh
function getAreaPriority(area) {
    switch (area) {
        case 'A': return 2;
        case 'B': return 1;
        case 'C': return 0.5;
        default: return 0;
    }
}

function getPriorityScore(priority) {
    switch (priority) {
        case '1': return 2.5;
        case '2': return 1.5;
        case '3': return 1;
        default: return 0;
    }
}

function calculateResult() {
    let passingScore = parseFloat(document.getElementById('passingScore').value);
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let area = document.getElementById('area').value;
    let priority = document.getElementById('priority').value;

    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
        document.getElementById('result2').innerText = 'Rớt (có môn bị điểm 0)';
        return;
    }

    let areaPriority = getAreaPriority(area);
    let priorityScore = getPriorityScore(priority);
    let totalScore = subject1 + subject2 + subject3 + areaPriority + priorityScore;

    if (totalScore >= passingScore) {
        document.getElementById('result2').innerText = `Đậu với tổng điểm: ${totalScore}`;
    } else {
        document.getElementById('result2').innerText = `Rớt với tổng điểm: ${totalScore}`;
    }
}

//Bài tập tính tiền điện
function calculateBillElec() {
    let name = document.getElementById('name').value;
    let kwh = parseFloat(document.getElementById('kwh').value);

    if (isNaN(kwh) || kwh < 0) {
        document.getElementById('result3').innerText = 'Vui lòng nhập số kWh hợp lệ.';
        return;
    }

    let totalAmount = 0;

    if (kwh <= 50) {
        totalAmount = kwh * 500;
    } else if (kwh <= 100) {
        totalAmount = 50 * 500 + (kwh - 50) * 650;
    } else if (kwh <= 200) {
        totalAmount = 50 * 500 + 50 * 650 + (kwh - 100) * 850;
    } else if (kwh <= 350) {
        totalAmount = 50 * 500 + 50 * 650 + 100 * 850 + (kwh - 200) * 1100;
    } else {
        totalAmount = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwh - 350) * 1300;
    }

    document.getElementById('result3').innerText = `Khách hàng ${name} phải trả: ${totalAmount} đồng`;
}

//Bài tập tính thuế
function calculateTax() {
    let nameThue = document.getElementById('nameThue').value;
    let income = parseFloat(document.getElementById('income').value);
    let dependents = parseInt(document.getElementById('dependents').value);

    if (isNaN(income) || isNaN(dependents) || income < 0 || dependents < 0) {
        document.getElementById('result4').innerText = 'Vui lòng nhập thông tin hợp lệ.';
        return;
    }

    let taxableIncome = income - 4 - dependents * 1.6;

    let tax = 0;

    if (taxableIncome <= 0) {
        tax = 0;
    } else if (taxableIncome <= 60) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 120) {
        tax = 60 * 0.05 + (taxableIncome - 60) * 0.10;
    } else if (taxableIncome <= 210) {
        tax = 60 * 0.05 + 60 * 0.10 + (taxableIncome - 120) * 0.15;
    } else if (taxableIncome <= 384) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (taxableIncome - 210) * 0.20;
    } else if (taxableIncome <= 624) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (taxableIncome - 384) * 0.25;
    } else if (taxableIncome <= 960) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (taxableIncome - 624) * 0.30;
    } else {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (taxableIncome - 960) * 0.35;
    }

    document.getElementById('result4').innerText = `Khách hàng ${nameThue} phải trả: ${tax.toFixed(2)} triệu VND`;
}


//Bài tập tính tiền cáp
function toggleConnectionsInput() {
    let customerType = document.getElementById('customerType').value;
    let connectionsInput = document.getElementById('connections');
    if (customerType === 'Doanh nghiệp') {
        connectionsInput.disabled = false;
    } else {
        connectionsInput.disabled = true;
        connectionsInput.value = 0;
    }
}

function calculateBill() {
    let customerType = document.getElementById('customerType').value;
    let premiumChannels = parseInt(document.getElementById('premiumChannels').value);
    let totalBill = 0;

    if (customerType === 'Nhà dân') {
        let billProcessingFee = 4.5;
        let basicServiceFee = 20.5;
        let premiumChannelFee = 7.5 * premiumChannels;
        totalBill = billProcessingFee + basicServiceFee + premiumChannelFee;
    } else if (customerType === 'Doanh nghiệp') {
        let connections = parseInt(document.getElementById('connections').value);
        let billProcessingFee = 15.0;
        let basicServiceFee = 75.0;
        if (connections > 10) {
            basicServiceFee += (connections - 10) * 5.0;
        }
        let premiumChannelFee = 50.0 * premiumChannels;
        totalBill = billProcessingFee + basicServiceFee + premiumChannelFee;
    }

    document.getElementById('totalBill').innerText = `Tổng hóa đơn: $${totalBill.toFixed(2)}`;
}
