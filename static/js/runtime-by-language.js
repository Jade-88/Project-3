let api_runtime_url2 = "/api/movie/runtime"
let api_rating_url2 = "api/movie/rating"

let make_language_options = () => {
    d3.json(api_runtime_url2).then(data => {
        let ilanguage = data.map(innerdata => innerdata.language)
        let ii = data.map(innerdata => innerdata)

        let uniqueLanguages = [];
        ilanguage.forEach((e) => {
            if (!uniqueLanguages.includes(e)) {
              uniqueLanguages.push(e);
            }
        });

        console.log(ii)
      d3.select("#language_options")
        .selectAll('option')
        .data(uniqueLanguages).enter()
        .append('option')
          .text(innerdata => innerdata)
    })  
  }
  make_language_options()



const iPlot2 = (our_filter) => {

    // start of plots
    let plot2 = () => {
        d3.json(api_runtime_url2).then(dat => {
            let nowVal = v => v.language == our_filter

            let iyear = dat.map(d => d.year)
            let iruntime = dat.filter(nowVal).map(d => d.Runtime)
            console.log(iruntime)
            let trace = {
                  type: 'scatter',
                  x: iyear,
                  y: iruntime,
                  mode: 'markers',
                  name: "1",
                  marker: {
                    color: iyear,
                    size: iruntime,
                    symbol: "circle",
                    sizeref: 4
                }
              }
              var layout = {
                width: 600,
                height: 500,
                title:'Runtime by Year',
                xaxis: {
                  title: 'Years',
                  showgrid: false,
                  zeroline: false
                },
                yaxis: {
                  title: 'Runtime',
                  showline: false
                }
              }

              let data = [trace]
              Plotly.newPlot('runtime-by-language', data, layout)
              
            })
        }
        plot2()

    
    }

iPlot2("Hindi")

function change_MyPlot2 (selected_language) {
  console.log(selected_language)
  iPlot2(selected_language)
}
















