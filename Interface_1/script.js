function atualizarCronometro() {
          var tempoFinal = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);
          setInterval(() => {
              var agora = new Date().getTime();
              var diferenca = tempoFinal - agora;
              var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
              var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
              var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
              document.getElementById("tempoRestante").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
          }, 1000);
      }
      atualizarCronometro();