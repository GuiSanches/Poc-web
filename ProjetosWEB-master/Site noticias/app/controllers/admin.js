module.exports.formulario_inclusao_noticia = (application, req, res) => {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = (Application, req, res) => {
    let noticia = req.body;

    function isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert("resumo", "Resumo é obrigatório").notEmpty();
    req.assert("resumo", "Resumo deve conter entre 100 e 100 caracteres").len(10, 100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req.assert("data_noticia", "A data é inválida").custom(isValidDate);
    req.assert("noticia", "Noticia é obrigatória").notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    let connection = Application.config.dbConnection();
    let noticiasModel = new Application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.render('noticias/noticias', { noticias: result });
    });

}
