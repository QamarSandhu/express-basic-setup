# express-startup-setup

### Steps to use this package

 ## In terminal
     mkdir my-project
     cd my-project
     npm init -y
     npm i express-startup-setup
     touch server.js
     code .
  
  ## Then open server.js file and write two lines of code given below
     const project=require('express-startup-setup')
     project.start();
     
  ## Then run in terminal
     node server.js
  
  #### your project has been initialized 
  #### now open package.json and paste this script
       "start":"node index.js"
  
  
  #### Delete your server.js file and start your project with
       npm run start
  
  ###### Create your models controllers in related directries 
      
