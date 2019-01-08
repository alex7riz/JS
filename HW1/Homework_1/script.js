//   task_1: missing semikolon and formatting string of code
(function(win)
  {
    var params = 
      {
        states:{
          url:"/",
          template: "temlate.js"
      }
  };
  	function setStates(params)
  		{
        if(win && !win.params)
        {
          win.params = params;
      }
  }
    setStates();
  	console.log(params.states.template);
  })
  (window);