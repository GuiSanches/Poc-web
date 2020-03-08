module.exports.index = (app, req, res) => {

    let conn = app.config.dbConnection();
    let noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.get5UltimasNoticias((error, result) => {
        if(result.length > 2) res.render("home/index", {noticias : result});
    });
    
}