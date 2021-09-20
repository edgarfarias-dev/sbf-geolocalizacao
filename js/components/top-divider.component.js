Vue.component('top-divider', {
    template:
    `
        <div class="top-divider d-none d-sm-block">
            <div class="container">
                <div class="row sbf-top">
                    <div class="col-md-4">
                        <i class="i-sbf-jordan"></i>&nbsp;<i class="i-sbf-snkrs"></i>
                    </div>
                    <div class="col-md-8">
                        <ul class="nav align-items-center">
                            <li><a href="#" class="nav-link text-muted">Ajuda</a></li>|
                            <li><a href="#" class="nav-link text-muted">Acompanhe seu pedido</a></li>|
                            <li><a href="#" class="nav-link text-muted">Junte-se a nós</a></li>|
                            <li><a href="#" class="nav-link text-muted">Entrar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: [],
    methods: {}
})
