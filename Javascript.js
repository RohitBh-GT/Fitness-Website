    function store(form) {
      var name = document.getElementById('name');
      var em = document.getElementById('em');
      var pw = document.getElementById('pw');
      var user = document.getElementById('user');

      localStorage.setItem('name', name.value);
      localStorage.setItem('em', em.value);
      localStorage.setItem('pw', pw.value);
      localStorage.setItem('user', user.value);
      window.location.href = "Login.html";

    }



      function check(form) {
        var name = document.getElementById('name');
        var em = document.getElementById('em');
        var pw = document.getElementById('pw');
        var user = document.getElementById('user');


        var storedName = localStorage.getItem('name');
        var storedEm = localStorage.getItem('em');
        var storedPw = localStorage.getItem('pw');
        var storedUs = localStorage.getItem('user');


        var userName = document.querySelector('#userName').value;
        var userEmail = document.getElementById('userEmail').value;
        var userPw = document.getElementById('userPw').value;
        var users = document.getElementById('users').value;
        console.log(userName === storedName, userEmail === storedEm, userPw === storedPw,users === storedUs );


        if (userName === storedName && userEmail === storedEm && userPw === storedPw && users === storedUs) 
     {
         if( users === "Administrator")
          {
            window.location.href = "Index.html";
          }
         
        else
        { 
          window.location.href = "Index.html";
        }
     }

       else {
          alert('ERROR.');
          window.location.href = "Login.html";
        }
    }

  function guest()
   {
   window.loaction.href = "IndexGuest.html";
   }

