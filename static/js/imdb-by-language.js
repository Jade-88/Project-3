let api_runtime_url4 = "/api/movie/runtime"
let api_rating_url4 = "api/movie/rating"

let make_language_options2 = () => {
    d3.json(api_runtime_url4).then(data => {
        let ilanguage = data.map(innerdata => innerdata.language)
        let ii = data.map(innerdata => innerdata)

        let uniquelanguages = [];
        ilanguage.forEach((e) => {
            if (!uniquelanguages.includes(e)) {
              uniquelanguages.push(e);
            }
        });

        console.log(ii)
      d3.select("#language_options2")
        .selectAll('option')
        .data(uniquelanguages).enter()
        .append('option')
          .text(innerdata => innerdata)
    })  
  }
  make_language_options2()



const iPlot4 = (our_filter) => {

    // start of plots
    let plot1 = () => {
        d3.json(api_rating_url4).then(dat => {
            let nowVal = v => v.language == our_filter

            let iyear = dat.map(d => d.year)
            let i_imdb = dat.filter(nowVal).map(d => d.imdbRating)
            console.log("--->",i_imdb)
            let trace = {
                  type: 'scatter',
                  x: iyear,
                  y: i_imdb,
                  mode: 'markers',
                  name: "1",
                  marker: {
                    color: iyear,
                    size: i_imdb,
                    symbol: "circle",
                    sizeref: 0.3
                }
              }
              var layout = {
                width: 600,
                height: 500,
                title:'IMDB Rating by Year',
                xaxis: {
                  title: 'Years',
                  showgrid: false,
                  zeroline: false
                },
                yaxis: {
                  title: 'IMDB Rating',
                  showline: false
                }
              }

              let data = [trace]
              Plotly.newPlot('imdb-by-language', data, layout)
              
            })
        }
        plot1()
    
    }

iPlot4("Hindi")

function change_imdb_plot2(selected_language) {
  iPlot4(selected_language)
}
















