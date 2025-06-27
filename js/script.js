

//SCRIPT PARA MUDAR A MINHA IDADE AUTOMATICAMENTE CONFORME OS ANOS VÃO PASSANDO

document.addEventListener("DOMContentLoaded", function() {
    function calcularIdade() {
        const nascimento = new Date("2009-06-07");  // Data de nascimento
        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth();  // Mês atual
        const dia = hoje.getDate();  // Dia atual

        // Verifica se já passou o aniversário este ano
        if (mes < nascimento.getMonth() || (mes === nascimento.getMonth() && dia < nascimento.getDate())) {
            idade--;
        }

        return idade;
    }

    // Exibir a idade no HTML
    document.getElementById("idade").textContent = calcularIdade();
});






























/*<section id="Serviços">
<div class="container">
    <h2>Serviços</h2>
    </h2>
</div>
<div class="container mt-5">
  <div class="row justify-content-center">
    <!-- Card 1 -->
    <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <div class="card h-100 mx-auto">
        <div class="card-body">
          <h5 class="card-title">Atriz</h5>
          <ul>
            <li class="card-text">Comunicação em público</li>
            <li class="card-text">Storytelling </li>
            <li class="card-text">Comunicação em público</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <div class="card h-100 mx-auto">
        <div class="card-body">
          <h5 class="card-title">Desenvolvedora Front-end</h5>
          <ul>
            <li class="card-text">Domínio das linguagens</li>
            <li class="card-text">Adaptabilidade </li>
            <li class="card-text">Designs responsivos</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Card 3 -->
    <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <div class="card h-100 mx-auto">
        <div class="card-body">
          <h5 class="card-title">Posts para Social Media</h5>
          <ul>
            <li class="card-text">Criatividade e originalidade</li>
            <li class="card-text">Conhecimento das plataformas</li>
            <li class="card-text">Habilidade de comunicação</li>
            <li class="card-text">Entendimento do público</li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</div>  
</section>*/
