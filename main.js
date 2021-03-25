//chave: imagem
//valor: link do filme

var mapFilmes = new Map();
mapFilmes.set("https://www.themoviedb.org/t/p/w220_and_h330_face/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", "https://www.primevideo.com/region/na/detail/0LLAAZGFX5FFP6TRRBIS4VDF1X/ref=atv_sr_def_c_unkc__1_1_1?qid=1616682997&pageTypeId=B07M5HPZDH&pageTypeIdSource=ASIN&language=pt_BR&sr=1-1");
mapFilmes.set("https://www.themoviedb.org/t/p/w220_and_h330_face/2SwrbqS8Tv40bHx4AGYpNJX1xDW.jpg", "https://globoplay.globo.com/v/8554972/programa/");
mapFilmes.set("https://www.themoviedb.org/t/p/w220_and_h330_face/jtsu9H1mZ3ecRTXAB0WhrTUiut2.jpg","https://www.netflix.com/search?q=shrek&jbv=70047102");

/*
var listaFilmes = ["https://www.themoviedb.org/t/p/w220_and_h330_face/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", "https://www.themoviedb.org/t/p/w220_and_h330_face/2SwrbqS8Tv40bHx4AGYpNJX1xDW.jpg","https://www.themoviedb.org/t/p/w220_and_h330_face/jtsu9H1mZ3ecRTXAB0WhrTUiut2.jpg"]
*/

for (let [key, value] of mapFilmes) {
    console.log("<a target='_blank' href='" + value + "'><img src='" + key + "'></a>");
    document.write("<a target='_blank' href='" + value + "'><img src='" + key + "'></a>");
    }

