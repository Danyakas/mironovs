// Demo: atlasām elementus
const input = document.getElementById('sampleInput');
const preview = document.getElementById('samplePreview');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const list = document.getElementById('list');
const codeBlock = document.getElementById('codeBlock');

// Parādām kodu failā (lai skolotājs var redzēt/rediģēt)
fetch('./script.js').then(r => r.text()).then(t => { codeBlock.textContent = t; }).catch(()=>{});

// Input notikums — priekšskatījums reāllaikā
input.addEventListener('input', (e) => {
  preview.textContent = e.target.value || 'Šeit tiks rādīts teksts.';
});

// Click — pievienot jaunu elementu
addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return alert('Ievadi tekstu!');
  const li = document.createElement('li');
  li.textContent = value;
  list.appendChild(li);
  input.value = '';
  preview.textContent = 'Šeit tiks rādīts teksts.';
  // atjaunojam kodu bloku (labs paraugs dinamiskai izmaiņai)
  codeBlock.textContent = '// Pievienots elements: ' + li.textContent + '\n' + codeBlock.textContent;
});

// Noņemt pēdējo
removeBtn.addEventListener('click', () => {
  const last = list.lastElementChild;
  if (last) last.remove();
});