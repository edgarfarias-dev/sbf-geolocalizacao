Vue.component('upper-divider', {
    template:
    `
        <div class="upper-divider">
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-between sbf-header">
                    <a href="#" class="d-flex align-items-center col-md-2">
                            <i class="i-sbf-nike"></i>
                        </a>
    
                        <ul class="nav col-md-auto justify-content-md-center d-none d-sm-flex">
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">Lançamento</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">Masculino</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">Feminino</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">Infantil</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">Ofertas</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark fw-bold">SNKRS</a></li>
                        </ul>
    
                        <div class="d-flex col-md-3 align-content-end" style="width: auto">
                            <div class="input-group d-none d-sm-flex">
                                <span class="sbf-busca-icon">
                                    <i class="i-sbf-lupa"></i>
                                </span>
                                <input type="text" class="sbf-busca" placeholder="Buscar">
                            </div>                            
                            <div class="d-sm-flex">
                                <i class="i-sbf-sacola"></i>
                            </div>
                            <div class="d-flex align-content-end d-block d-md-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </div>
                        </div>
                </header>                
            </div>
        </div>
    `,
    props: [],
    methods: {}
})
