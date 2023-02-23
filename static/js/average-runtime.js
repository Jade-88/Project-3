let api_runtime_url = "/api/movie/runtime"
let api_rating_url = "api/movie/rating"

const make_options = () => {
    d3.json(api_runtime_url).then(data => {
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
  make_options()



const iPlot = (our_filter) => {

    // start of plots
    let plot1 = () => {
        d3.json(api_runtime_url).then(dat => {
            let nowVal = v => v.country == our_filter

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
                title:'Avg Runtime by Year',
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
              Plotly.newPlot('bubble_plot', data, layout)
              
            })
        }
        plot1()



        let plot2 = () => {
            pass
        } 
    
    }

iPlot("India")

function chang_MyPlot (selected_country) {
  iPlot(selected_country)
}