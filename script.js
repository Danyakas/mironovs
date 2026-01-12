// Piesaistām notikumus ar addEventListener()
// 1) 'input' notikums — reāllaika priekšskatījums
const input = document.getElementById('userText');
const preview = document.getElementById('preview');

input.addEventListener('input', (e) => {
  const value = e.target.value.trim();
  // Ja nav teksta — rāda noklusējuma ziņu
  preview.textContent = value.length ? value : 'Šeit tiks rādīts ievadītais teksts.';
  // Ja teksts ir garāks nekā 30 simboli — mainām stilu (vizuāla atsauce)
  if (value.length > 30) {
    preview.classList.add('highlight');
  } else {
    preview.classList.remove('highlight');
  }
});

// 2) 'click' notikums — poga pārslēdz papildu informācijas sadaļu
const toggleBtn = document.getElementById('toggleBtn');
const extra = document.getElementById('extra');

toggleBtn.addEventListener('click', () => {
  const isHidden = extra.classList.toggle('hidden'); // pārslēdz redzamību
  // Mainām pogas tekstu, lai lietotājam ir skaidrs stāvoklis
  toggleBtn.textContent = isHidden ? 'Rādīt papildu informāciju' : 'Slēpt papildu informāciju';
});

// Papildus piemērs: focus/blur lai izceltu ievades lauku
input.addEventListener('focus', () => {
  input.style.outline = '2px solid #2d89ef';
});
input.addEventListener('blur', () => {
  input.style.outline = '';
});
