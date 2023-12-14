document.addEventListener('DOMContentLoaded', function() {
    const mesas = [];
    const alunos = [
        "Beyoncé",
        "Taylor Swift",
        "Kanye West",
        "Ariana Grande",
        "Drake",
        "Lady Gaga",
        "Justin Bieber",
        "Katy Perry",
        "Ed Sheeran",
        "Rihanna",
        "Travis Scott",
        "Cardi B",
        "The Weeknd",
        "Dua Lipa",
        "Post Malone",
        "Bruno Mars",
        "Billie Eilish",
        "Jay-Z",
        "Nicki Minaj",
        "Miley Cyrus",
        "Shawn Mendes",
        "Lizzo",
        "John Legend",
        "Adele",
        "Eminem",
        "Snoop Dogg",
        "Alicia Keys",
        "Chris Brown",
        "Selena Gomez",
        "Jennifer Lopez",
        "Harry Styles",
        "A$AP Rocky",
        "Adele",
        "Alicia Keys",
        "Eminem",
        "Ariana Grande",
        "Justin Timberlake",
        "Britney Spears",
        "Chris Pratt",
        "Kendrick Lamar"
    ];

    for (let i = alunos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alunos[i], alunos[j]] = [alunos[j], alunos[i]];
    }

    for (let i = 0; i < 8; i++) { // Criando 8 mesas
        const mesa = [];
        for (let j = 0; j < 4; j++) { // 4 alunos por mesa
            const aluno = alunos.pop();
            if (aluno) {
                mesa.push(aluno);
            }
        }
        mesas.push(mesa);
    }

    const mesasContainer = document.getElementById('mesas');
    mesas.forEach((mesa, index) => {
        const col = document.createElement('div');
        col.classList.add('col-md-3', 'mb-4');
        col.innerHTML = `
            <div class="card ${index % 2 == 0 ? 'bg-light':'bg-info'}">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="bi bi-person"></i> Mesa ${index + 1}
                    </h5>
                    <ul class="list-group" >
                        ${mesa.map(aluno => `<li class="list-group-item">${aluno}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        mesasContainer.appendChild(col);
    });
  // Adicionando evento de atualização ao botão de refresh
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', function() {
      location.reload();
  });
    localStorage.setItem('novo_mesas', JSON.stringify(mesas));
    const interval = setInterval(aumentarProgresso,50)
});


var viewResult = document.getElementById('viewResult')
var barProgressText = document.getElementById('progress-text')
var barProgress = document.getElementById('barProgress')
let cont = 0;
function aumentarProgresso() {
       
        
    if(cont <= 100){
       barProgressText.innerHTML = `${cont++} %` ;
    }
    setTimeout(() => {
            barProgress.style ='display:none'
            viewResult.style = 'display:block'
    }, "6200");



}