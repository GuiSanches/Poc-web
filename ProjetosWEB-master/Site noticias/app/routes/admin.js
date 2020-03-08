module.exports = (Application) => {
  Application.get("/formulario_inclusao_noticia", (req, res) => {
    Application.app.controllers.admin.formulario_inclusao_noticia(Application, req, res);
  });

  Application.post("/noticias/salvar", (req, res) => {    
    Application.app.controllers.admin.noticias_salvar(Application, req, res);
  });


}
