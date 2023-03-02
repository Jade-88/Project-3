let api_runtime_url3 = "/api/movie/runtime"
let api_rating_url3 = "api/movie/rating"

let make_country_options2 = () => {
    d3.json(api_runtime_url3).then(data => {
        let icountry = data.map(innerdata => innerdata.country)
        let ii = data.map(innerdata => innerdata)

        let uniqueCountries = [];
        icountry.forEach((e) => {
            if (!uniqueCountries.includes(e)) {
              uniqueCountries.push(e);
            }
        });

        console.log(ii)
      d3.select("#country_options")
        .selectAll('option')
        .data(uniqueCountries).enter()
        .append('option')
          .text(innerdata => innerdata)
    })  
  }
  make_country_options2()



const iPlot3 = (our_filter) => {

    // start of plots
    let plot1 = () => {
        d3.json(api_rating_url3).then(dat => {
            let nowVal = v => v.country == our_filter

            let iyear = dat.map(d => d.year)
            let i_imdb = dat.filter(nowVal).map(d => d.imdbRating)
            console.log(i_imdb)
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
              Plotly.newPlot('imdb-by-country', data, layout)
              
            })
        }
        plot1()
    
    }

iPlot3("India")

function change_imdb_plot1 (selected_country) {
  iPlot3(selected_country)
}
















