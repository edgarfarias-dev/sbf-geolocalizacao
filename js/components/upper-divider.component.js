Vue.component('upper-divider', {
    template:
    `
        <div class="upper-divider">
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between sbf-header">
                    <a href="#" class="d-flex align-items-center col-md-2">
                        <i class="i-sbf-nike"></i>
                    </a>

                    <ul class="nav col-md-auto justify-content-center">
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">Lançamento</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">Masculino</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">Feminino</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">Infantil</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">Ofertas</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark fw-bold">SNKRS</a></li>
                    </ul>

                    <div class="d-flex col-md-3" style="width: auto">
                        <div class="d-flex input-group">
                    <span class="sbf-busca-icon">
                        <i class="i-sbf-lupa"></i>
                    </span>
                            <input type="text" class="sbf-busca" placeholder="Buscar">
                        </div>
                        <div class="d-flex">
                            <i class="i-sbf-sacola"></i>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    `,
    props: [],
    methods: {}
})
