function hitungKeliling() {
    const sisi = parseFloat(document.getElementById('sisiKeliling').value);
    
    const keliling = 4 * sisi;
    
    document.getElementById('hasilKeliling').innerHTML = `<p>Keliling Persegi adalah: ${keliling}</p>`;
}

function hitungLuas() {
    const sisi = parseFloat(document.getElementById('sisiLuas').value);
    
    const luas = sisi * sisi;
    
    document.getElementById('hasilLuas').innerHTML = `<p>Luas Persegi adalah: ${luas}</p>`;
}