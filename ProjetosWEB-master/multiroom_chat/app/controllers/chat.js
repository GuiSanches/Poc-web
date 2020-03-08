module.exports.iniciaChat = (application, req, res) => {

    req.assert('nome', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('nome', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);
    let erros = req.validationErrors();

    if(erros) {
        res.render("index", {validacao : erros});
        res.send("Existem erros no formulário");
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {nome: req.body.nome, mensagem: ' acabou de entrar no chat'});

    res.render("chat", { dadosForm: req.body});
};
