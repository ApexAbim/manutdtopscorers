let season=[];
let gols=[];

function goal()
{
    let xhr = new XMLHttpRequest();

     xhr.open('GET','test.json',true);

    xhr.onload= function()
    {
        if(this.status==200)
        {
           let gol = JSON.parse(this.responseText);

          for(i=0;i<gol.Utd.length;i++)
          {
              season.push(gol.Utd[i].season);
              gols.push(gol.Utd[i].goals);
          } 
        }
    }
 xhr.send();
  
    var data =
    {
        labels:season,
        series:[gols]
    };
    var options={
        high:40,
        low:0,
        onlyInteger: true,

       
        plugins: 
        [
            Chartist.plugins.tooltip(
                {
                  textAnchor: 'middle',
                   labelInterpolationFnc: function(value)
                    {
                       return  value;
                    }
                 }),
           
              Chartist.plugins.ctAxisTitle(
                {
                  axisX:
                      {
                      },
                  axisY:
                      {
                        axisTitle:' ',
                        axisClass:'ct-axis-title',
                        offset:{x:10,y:-1},
                    
                      }
                }
              )
        ],
      };
  
    

    new Chartist.Bar('.ct-chart', data, options);
   

}

window.onload=goal;

