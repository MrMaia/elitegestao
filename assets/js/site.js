/* ============================================================
   Elite Assessoria — script do site
   ============================================================ */
(function () {
  "use strict";

  /* Mesmo endpoint de e-mail do site da Conectividade */
  var ENDPOINT = "https://www.goftig.net/mail/conectividade.php";

  var ANO_FUNDACAO = 2014; /* TODO: confirmar ano de fundação real */

  /* ---------- Serviços (dados) ---------- */
  /* Ícones: Heroicons (outline) — apenas o conteúdo "d" do path */
  var SERVICOS = [
    { icone: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 11-6 0 3 3 0 016 0z",
      titulo: "Departamento Pessoal Completo",
      texto: "Assumimos toda a rotina do DP da sua empresa: cadastros, controle de jornada, benefícios, afastamentos e gestão documental dos colaboradores, do início ao fim do vínculo." },
    { icone: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      titulo: "Folha de Pagamento",
      texto: "Processamento mensal da folha com precisão: proventos, descontos, encargos, provisões e emissão de holerites. O menor erro gera transtornos — por isso cada cálculo é conferido." },
    { icone: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
      titulo: "Admissão e Rescisão",
      texto: "Conduzimos admissões e desligamentos com agilidade e segurança jurídica: exames, contratos, registro no eSocial, cálculo de verbas rescisórias e homologações." },
    { icone: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
      titulo: "Férias e 13º Salário",
      texto: "Planejamento e cálculo de férias individuais e coletivas, abonos e parcelas do 13º salário, sempre dentro dos prazos legais e sem risco de pagamento em dobro." },
    { icone: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      titulo: "eSocial e Obrigações Acessórias",
      texto: "Envio de eventos ao eSocial, DCTFWeb, FGTS Digital e demais declarações com os dados corretamente prestados, evitando multas e autuações da fiscalização." },
    { icone: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      titulo: "Consultoria Trabalhista",
      texto: "Orientação preventiva sobre jornadas, contratos, acordos e convenções coletivas. Antecipamos riscos para reduzir passivos trabalhistas antes que eles aconteçam." },
    { icone: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      titulo: "Recrutamento e Seleção",
      texto: "Apoiamos o seu RH na atração e seleção de talentos: divulgação de vagas, triagem de currículos, entrevistas e apoio na integração dos novos colaboradores." },
    { icone: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      titulo: "Consultoria em Gestão Empresarial",
      texto: "Diagnóstico de processos, indicadores de desempenho e plano de ação para organizar a operação, reduzir custos e preparar a empresa para crescer com estrutura." },
    { icone: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      titulo: "Auditoria e Diagnóstico de DP",
      texto: "Revisão completa dos procedimentos do departamento pessoal: identificamos incorreções, pagamentos indevidos e oportunidades de melhoria com relatório objetivo." }
  ];

  function montarServicos() {
    var grid = document.getElementById("grid-servicos");
    if (!grid) return;
    grid.innerHTML = SERVICOS.map(function (s) {
      return '' +
        '<article class="reveal group rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-7">' +
          '<div class="grid place-items-center h-14 w-14 rotate-45 rounded-xl bg-gradient-to-br from-brand-light to-brand-dark text-white shadow-md shadow-brand/30 group-hover:scale-110 transition-transform duration-300">' +
            '<svg class="h-7 w-7 -rotate-45" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="' + s.icone + '"/></svg>' +
          '</div>' +
          '<h3 class="mt-6 text-lg font-semibold text-slate-900 group-hover:text-brand transition">' + s.titulo + '</h3>' +
          '<p class="mt-3 text-sm leading-relaxed flex-1">' + s.texto + '</p>' +
          '<a href="#contato" data-servico="' + s.titulo + '" class="mt-5 -mb-2 py-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">Solicitar proposta' +
            '<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>' +
        '</article>';
    }).join("");
    observarReveal();
  }

  /* ---------- Pré-preenche o assunto ao clicar em "Solicitar proposta" ---------- */
  function initPrefillAssunto() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest("[data-servico]") : null;
      if (!link) return;
      var assunto = document.getElementById("ct-assunto");
      if (assunto) assunto.value = "Proposta: " + link.getAttribute("data-servico");
    });
  }

  /* ---------- Header dinâmico ---------- */
  function initHeader() {
    var header = document.getElementById("header");
    var logoLight = document.getElementById("logo-light");
    var logoDark = document.getElementById("logo-dark");
    if (!header) return;

    function onScroll() {
      var solido = window.scrollY > 40;
      header.classList.toggle("bg-white", solido);
      header.classList.toggle("shadow-md", solido);
      if (logoLight) logoLight.classList.toggle("hidden", solido);
      if (logoDark) logoDark.classList.toggle("hidden", !solido);
      document.querySelectorAll(".nav-link").forEach(function (l) {
        l.classList.toggle("text-white/90", !solido);
        l.classList.toggle("hover:text-white", !solido);
        l.classList.toggle("text-slate-700", solido);
        l.classList.toggle("hover:text-brand", solido);
      });
      var toggle = document.getElementById("menu-toggle");
      if (toggle) {
        toggle.classList.toggle("text-white", !solido);
        toggle.classList.toggle("text-slate-800", solido);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Menu mobile ---------- */
  function initMenuMobile() {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");
    var iOpen = document.getElementById("icon-open");
    var iClose = document.getElementById("icon-close");
    if (!toggle || !menu) return;

    function fechar() {
      menu.classList.add("hidden");
      iOpen.classList.remove("hidden");
      iClose.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var aberto = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      iOpen.classList.toggle("hidden", !aberto);
      iClose.classList.toggle("hidden", aberto);
      toggle.setAttribute("aria-expanded", String(!aberto));
    });
    menu.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("click", fechar);
    });
  }

  /* ---------- Revelação no scroll ---------- */
  var observer;
  function observarReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Contadores das estatísticas ---------- */
  function initContadores() {
    var alvos = document.querySelectorAll("[data-count]");
    if (!alvos.length) return;

    var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function animar(el) {
      var fim = parseInt(el.getAttribute("data-count"), 10) || 0;
      if (reduzMovimento) { el.textContent = String(fim); return; }
      var duracao = 1400;
      var inicio = null;
      function passo(ts) {
        if (!inicio) inicio = ts;
        var p = Math.min((ts - inicio) / duracao, 1);
        var eased = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
        el.textContent = String(Math.round(fim * eased));
        if (p < 1) requestAnimationFrame(passo);
      }
      requestAnimationFrame(passo);
    }

    if (!("IntersectionObserver" in window)) {
      alvos.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Modal Trabalhe Conosco ---------- */
  function initModal() {
    var modal = document.getElementById("modal-cv");
    if (!modal) return;
    var ultimoFoco = null;

    function setInerte(ativo) {
      document.querySelectorAll("header, main, footer, #whats-fab").forEach(function (el) { el.inert = ativo; });
    }
    function abrir() {
      ultimoFoco = document.activeElement;
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      setInerte(true);
      var primeiro = modal.querySelector("input, textarea, button");
      if (primeiro) primeiro.focus();
    }
    function fechar() {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
      setInerte(false);
      if (ultimoFoco) ultimoFoco.focus();
    }
    document.querySelectorAll("[data-modal-open]").forEach(function (b) { b.addEventListener("click", abrir); });
    document.querySelectorAll("[data-modal-close]").forEach(function (b) { b.addEventListener("click", fechar); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) fechar();
    });
  }

  /* ---------- FAB do WhatsApp: some quando a seção de contato está visível ---------- */
  function initFabWhatsApp() {
    var fab = document.getElementById("whats-fab");
    var contato = document.getElementById("contato");
    if (!fab || !contato || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (entries) {
      var visivel = entries[0].isIntersecting;
      fab.classList.toggle("opacity-0", visivel);
      fab.classList.toggle("pointer-events-none", visivel);
    }, { threshold: 0.2 }).observe(contato);
  }

  /* ---------- Envio de formulários ---------- */
  function definirStatus(form, tipo, msg) {
    var el = form.querySelector(".form-status");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden", "bg-green-100", "text-green-700", "bg-red-100", "text-red-700");
    if (tipo === "ok") { el.classList.add("bg-green-100", "text-green-700"); }
    else { el.classList.add("bg-red-100", "text-red-700"); }
  }

  function carregando(form, ativo) {
    var btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.disabled = ativo;
    btn.querySelector(".btn-spinner").classList.toggle("hidden", !ativo);
  }

  function initForm(id, sucessoMsg) {
    var form = document.getElementById(id);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var statusEl = form.querySelector(".form-status");
      if (statusEl) statusEl.classList.add("hidden");
      carregando(form, true);

      fetch(ENDPOINT, { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.text(); })
        .then(function (txt) {
          txt = (txt || "").trim();
          if (txt === "OK" || txt === "encv:OK") {
            definirStatus(form, "ok", sucessoMsg);
            form.reset();
          } else {
            definirStatus(form, "erro", txt.replace("encv:", "") || "Não foi possível enviar. Tente novamente.");
          }
        })
        .catch(function () {
          definirStatus(form, "erro", "Erro de conexão. Verifique sua internet e tente novamente.");
        })
        .finally(function () { carregando(form, false); });
    });
  }

  /* ---------- Diversos ---------- */
  function initDiversos() {
    var ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();

    var anos = new Date().getFullYear() - ANO_FUNDACAO;
    var anosExp = document.getElementById("anos-exp");
    if (anosExp) anosExp.setAttribute("data-count", String(anos));
    var badge = document.getElementById("ano-fundacao-badge");
    if (badge) badge.textContent = String(ANO_FUNDACAO);
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    montarServicos();
    initPrefillAssunto();
    initHeader();
    initMenuMobile();
    initModal();
    initFabWhatsApp();
    observarReveal();
    initDiversos();
    initContadores();
    initForm("contato-form", "Sua mensagem foi enviada com sucesso. Obrigado!");
    initForm("cv-form", "Seu currículo foi enviado. Obrigado!");
  });
})();
